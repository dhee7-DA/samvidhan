# SAMVIDHAN Workspace Rules — Persistent Project Log & Backup Hygiene

## Mandatory Project Log Maintenance (`PROJECT_LOG.md`)

To guarantee complete traceability of every file and step across sessions (and protect against local drive loss), you **MUST** keep `PROJECT_LOG.md` continuously up to date:

1. **Log every completed step & file change:**
   - After completing any feature, fix, refactor, recovery, or configuration step, run:
     ```bash
     npm run log:update -- --step "<concise summary of step>" --details "<key verification/notes>"
     ```
   - This automatically records the timestamp, step summary, exact files touched, and refreshes the **Project Snapshot**, **Complete File Inventory** (every tracked/new file with size, line count, and last commit), and **Complete Git Commit History**.
2. **Sync before every commit:**
   - Before running `git commit`, always ensure `PROJECT_LOG.md` reflects the exact files and step being committed (`npm run log:update`), and stage `PROJECT_LOG.md` with your changes.
3. **Regular GitHub backups:**
   - After meaningful milestones or multi-file changes (and after confirming `npm run build` passes), commit cleanly and push (or remind the user to push) to `origin/main` (`https://github.com/dhee7-DA/samvidhan`) so no local-only work is lost.
4. **Never leave undocumented files:**
   - Every created, modified, renamed, or deleted project file must appear in `PROJECT_LOG.md` via `npm run log:update`.
