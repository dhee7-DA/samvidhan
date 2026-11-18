#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const LOG_PATH = path.join(ROOT, 'PROJECT_LOG.md');

function git(args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
  }).trimEnd();
}

function formatLocalTimestamp(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  const tzMin = -date.getTimezoneOffset();
  const sign = tzMin >= 0 ? '+' : '-';
  const absTz = Math.abs(tzMin);
  const tzH = pad(Math.floor(absTz / 60));
  const tzM = pad(absTz % 60);
  return `${y}-${m}-${d} ${hh}:${mm}:${ss} (${sign}${tzH}:${tzM})`;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function countLines(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const textExts = new Set([
    '.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs', '.json', '.css', '.html',
    '.md', '.svg', '.txt', '.yml', '.yaml', '.env', '.gitignore',
  ]);
  const base = path.basename(filePath);
  if (!textExts.has(ext) && !base.startsWith('.')) return null;
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.length === 0) return 0;
    return content.split(/\r?\n/).length;
  } catch {
    return null;
  }
}

function parseArgs(argv) {
  const opts = { step: null, details: null, files: null, status: 'DONE' };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--step' && argv[i + 1]) {
      opts.step = argv[++i];
    } else if (arg === '--details' && argv[i + 1]) {
      opts.details = argv[++i];
    } else if (arg === '--files' && argv[i + 1]) {
      opts.files = argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
    } else if (arg === '--status' && argv[i + 1]) {
      opts.status = argv[++i];
    }
  }
  return opts;
}

function collectGitData() {
  const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']);
  const headHash = git(['rev-parse', '--short', 'HEAD']);
  const headFullDate = git(['log', '-1', '--format=%ad', '--date=iso-strict']);
  let remoteUrl = 'none';
  try {
    remoteUrl = git(['remote', 'get-url', 'origin']);
  } catch {
    // no remote configured
  }

  // Single-pass git log to gather all commits and last-modified metadata per file
  const rawLog = git([
    'log',
    '--name-only',
    '--format=<<<COMMIT>>>%h|%ad|%s',
    '--date=short',
  ]);

  const commits = [];
  const fileLastCommit = new Map();

  for (const block of rawLog.split('<<<COMMIT>>>')) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    const lines = trimmed.split(/\r?\n/);
    const [hash, date, ...msgParts] = lines[0].split('|');
    const message = msgParts.join('|');
    const files = lines.slice(1).map((l) => l.trim()).filter(Boolean);
    commits.push({ hash, date, message, files });
    for (const f of files) {
      if (!fileLastCommit.has(f)) {
        fileLastCommit.set(f, { hash, date, message });
      }
    }
  }

  // Gather tracked + untracked (non-ignored) files
  const tracked = git(['ls-files']).split(/\r?\n/).filter(Boolean);
  const untracked = git(['ls-files', '--others', '--exclude-standard'])
    .split(/\r?\n/)
    .filter(Boolean);

  const allFilesSet = new Set([...tracked, ...untracked]);
  const allFiles = Array.from(allFilesSet).sort((a, b) => a.localeCompare(b));

  const statusRaw = git(['status', '--short']);
  const changedFiles = statusRaw
    ? statusRaw.split(/\r?\n/).filter(Boolean)
    : [];

  return {
    branch,
    headHash,
    headFullDate,
    remoteUrl,
    commits,
    fileLastCommit,
    trackedCount: tracked.length,
    untrackedCount: untracked.length,
    allFiles,
    untrackedSet: new Set(untracked),
    changedFiles,
  };
}

function buildSnapshotSection(data, nowStr) {
  return [
    '<!-- AUTO:SNAPSHOT:START -->',
    '| Metric | Value |',
    '| :--- | :--- |',
    `| **Last Log Sync** | ${nowStr} |`,
    `| **Repository** | ${data.remoteUrl} |`,
    `| **Branch / HEAD** | \`${data.branch}\` @ \`${data.headHash}\` (${data.headFullDate}) |`,
    `| **Total Commits** | ${data.commits.length} |`,
    `| **Total Files Indexed** | ${data.allFiles.length} (${data.trackedCount} tracked, ${data.untrackedCount} new untracked) |`,
    `| **Working Tree** | ${data.changedFiles.length === 0 ? 'Clean' : `${data.changedFiles.length} pending change(s)`} |`,
    '<!-- AUTO:SNAPSHOT:END -->',
  ].join('\n');
}

function buildFilesSection(data) {
  const groups = new Map();

  for (const relPath of data.allFiles) {
    const absPath = path.join(ROOT, relPath);
    if (!fs.existsSync(absPath)) continue;
    const stat = fs.statSync(absPath);
    if (!stat.isFile()) continue;

    const dir = path.dirname(relPath) === '.' ? '(root)' : path.dirname(relPath).replace(/\\/g, '/');
    if (!groups.has(dir)) groups.set(dir, []);

    const lines = countLines(absPath);
    const meta = data.fileLastCommit.get(relPath);
    const statusLabel = data.untrackedSet.has(relPath)
      ? 'new (uncommitted)'
      : meta
        ? `\`${meta.hash}\` (${meta.date})`
        : 'tracked';

    groups.get(dir).push({
      relPath,
      name: path.basename(relPath),
      size: formatBytes(stat.size),
      lines: lines !== null ? String(lines) : '—',
      statusLabel,
    });
  }

  const sortedDirs = Array.from(groups.keys()).sort((a, b) => {
    if (a === '(root)') return -1;
    if (b === '(root)') return 1;
    return a.localeCompare(b);
  });

  const out = ['<!-- AUTO:FILES:START -->'];
  out.push(`> Indexed **${data.allFiles.length}** project files across **${sortedDirs.length}** directories (excluding \`node_modules/\`, \`dist/\`, \`.git/\`).`);
  out.push('');

  for (const dir of sortedDirs) {
    const entries = groups.get(dir);
    out.push(`### \`${dir}\` (${entries.length} file${entries.length === 1 ? '' : 's'})`);
    out.push('');
    out.push('| File | Size | Lines | Last Commit |');
    out.push('| :--- | ---: | ---: | :--- |');
    for (const e of entries) {
      out.push(`| \`${e.relPath}\` | ${e.size} | ${e.lines} | ${e.statusLabel} |`);
    }
    out.push('');
  }

  out.push('<!-- AUTO:FILES:END -->');
  return out.join('\n');
}

function buildCommitsSection(data) {
  const out = ['<!-- AUTO:COMMITS:START -->'];
  out.push(`> Complete git history (**${data.commits.length}** commits, newest first).`);
  out.push('');
  out.push('| # | Date | Commit | Files | Summary |');
  out.push('| ---: | :--- | :--- | ---: | :--- |');

  const total = data.commits.length;
  data.commits.forEach((c, idx) => {
    const num = total - idx;
    const safeMsg = c.message.replace(/\|/g, '\\|');
    out.push(`| ${num} | ${c.date} | \`${c.hash}\` | ${c.files.length} | ${safeMsg} |`);
  });

  out.push('<!-- AUTO:COMMITS:END -->');
  return out.join('\n');
}

function createInitialTemplate() {
  return `# SAMVIDHAN — Project Activity & File Log

> Persistent, auto-synced ledger of every step, file, and commit in the **Samvidhan (Indian Constitution)** project.
> Run \`npm run log:update\` (or \`npm run log:update -- --step "Summary of work"\`) to keep this log synchronized.

## Project Snapshot

<!-- AUTO:SNAPSHOT:START -->
<!-- AUTO:SNAPSHOT:END -->

---

## Step-by-Step Activity Log

<!-- AUTO:STEPS:START -->
<!-- AUTO:STEPS:END -->

---

## Complete File Inventory

<!-- AUTO:FILES:START -->
<!-- AUTO:FILES:END -->

---

## Complete Git Commit History

<!-- AUTO:COMMITS:START -->
<!-- AUTO:COMMITS:END -->
`;
}

function replaceBlock(content, startMarker, endMarker, replacement) {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(`Missing markers ${startMarker} / ${endMarker} in PROJECT_LOG.md`);
  }
  return (
    content.slice(0, startIdx) +
    replacement +
    content.slice(endIdx + endMarker.length)
  );
}

function prependStep(content, nowStr, opts, data) {
  if (!opts.step) return content;

  const filesList =
    opts.files && opts.files.length > 0
      ? opts.files
      : data.changedFiles
          .map((line) => line.trim())
          .filter((line) => !line.endsWith('PROJECT_LOG.md'));

  const lines = [
    `### [${nowStr}] ${opts.step} (${opts.status})`,
  ];
  if (opts.details) {
    lines.push(`- **Details:** ${opts.details}`);
  }
  if (filesList.length > 0) {
    lines.push(`- **Files Touched (${filesList.length}):** ${filesList.map((f) => `\`${f}\``).join(', ')}`);
  } else {
    lines.push('- **Files Touched:** No working-tree file diffs');
  }
  lines.push(`- **Git HEAD:** \`${data.branch}\` @ \`${data.headHash}\``);
  lines.push('');

  const marker = '<!-- AUTO:STEPS:START -->';
  const idx = content.indexOf(marker);
  if (idx === -1) {
    throw new Error(`Missing marker ${marker} in PROJECT_LOG.md`);
  }
  const insertAt = idx + marker.length;
  return content.slice(0, insertAt) + '\n\n' + lines.join('\n') + content.slice(insertAt).replace(/^\n+/, '\n');
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const nowStr = formatLocalTimestamp();
  const data = collectGitData();

  let content = fs.existsSync(LOG_PATH)
    ? fs.readFileSync(LOG_PATH, 'utf8')
    : createInitialTemplate();

  content = prependStep(content, nowStr, opts, data);
  content = replaceBlock(
    content,
    '<!-- AUTO:SNAPSHOT:START -->',
    '<!-- AUTO:SNAPSHOT:END -->',
    buildSnapshotSection(data, nowStr)
  );
  content = replaceBlock(
    content,
    '<!-- AUTO:FILES:START -->',
    '<!-- AUTO:FILES:END -->',
    buildFilesSection(data)
  );
  content = replaceBlock(
    content,
    '<!-- AUTO:COMMITS:START -->',
    '<!-- AUTO:COMMITS:END -->',
    buildCommitsSection(data)
  );

  fs.writeFileSync(LOG_PATH, content, 'utf8');
  console.log(
    `Updated PROJECT_LOG.md (${data.allFiles.length} files, ${data.commits.length} commits${opts.step ? `, logged step: "${opts.step}"` : ''}).`
  );
}

main();
