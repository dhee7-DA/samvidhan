import { LEGAL_DICTIONARY } from '../data/legalDictionaryData';
import { FORENSIC_VOCABULARY, type ForensicWord } from '../data/forensicVocabularyData';
import type { LegalTerm } from '../types/dictionary';

export interface DictionaryDefinition {
  word: string;
  source: 'constitutional_lexicon' | 'forensic_vocabulary' | 'english_dictionary';
  phonetic?: string;
  audioUrl?: string;
  category?: string;
  partOfSpeech?: string;
  meaning: string;
  example: string;
  statutoryOrCaseRef?: string;
  relatedArticles?: string[];
  synonyms?: string[];
}

// Pre-index legal terms by lower-case key and aliases
const LEGAL_TERM_MAP = new Map<string, LegalTerm>();
LEGAL_DICTIONARY.forEach((item) => {
  LEGAL_TERM_MAP.set(item.term.toLowerCase(), item);
  if (item.aliases) {
    item.aliases.forEach((alias) => {
      LEGAL_TERM_MAP.set(alias.toLowerCase(), item);
    });
  }
});

// Cache for external API lookups to ensure instant repeat lookups
const API_CACHE = new Map<string, DictionaryDefinition>();

// Clean a raw selected string (remove punctuation, symbols, whitespace)
export function cleanLookupWord(raw: string): string {
  if (!raw) return '';
  return raw
    .trim()
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
    .toLowerCase();
}

/**
 * Universal lookup function:
 * 1. Checks curated Constitutional Legal Dictionary (215+ terms with examples & case citations).
 * 2. Checks built-in Forensic & Judicial Vocabulary.
 * 3. Queries Free Universal English Dictionary API (cached) with phonetic audio and examples.
 */
export async function lookupUniversalWord(rawWord: string): Promise<DictionaryDefinition | null> {
  const cleaned = cleanLookupWord(rawWord);
  if (!cleaned || cleaned.length < 2) return null;

  // 1. Check Primary Constitutional & Criminal Legal Lexicon
  if (LEGAL_TERM_MAP.has(cleaned)) {
    const term = LEGAL_TERM_MAP.get(cleaned)!;
    return {
      word: term.term,
      source: 'constitutional_lexicon',
      phonetic: term.phoneticOrLiteral,
      category: term.category,
      partOfSpeech: term.category === 'Latin Maxims' ? 'Latin Maxim' : 'Legal Term',
      meaning: term.detailedMeaning,
      example: term.easyExample || `The doctrine of ${term.term} was authoritatively applied by the Supreme Court.`,
      statutoryOrCaseRef: term.statutoryOrCaseRef,
      relatedArticles: term.relatedArticles
    };
  }

  // Also check if any legal term starts with or contains this word
  for (const [key, term] of LEGAL_TERM_MAP.entries()) {
    if (key === cleaned || term.term.toLowerCase() === cleaned) {
      return {
        word: term.term,
        source: 'constitutional_lexicon',
        phonetic: term.phoneticOrLiteral,
        category: term.category,
        partOfSpeech: term.category === 'Latin Maxims' ? 'Latin Maxim' : 'Legal Term',
        meaning: term.detailedMeaning,
        example: term.easyExample,
        statutoryOrCaseRef: term.statutoryOrCaseRef,
        relatedArticles: term.relatedArticles
      };
    }
  }

  // 2. Check Built-in Forensic Vocabulary
  if (FORENSIC_VOCABULARY[cleaned]) {
    const fWord = FORENSIC_VOCABULARY[cleaned];
    return {
      word: fWord.word,
      source: 'forensic_vocabulary',
      phonetic: fWord.phonetic,
      category: fWord.category,
      partOfSpeech: fWord.partOfSpeech,
      meaning: fWord.meaning,
      example: fWord.example,
      statutoryOrCaseRef: fWord.legalContext,
      synonyms: fWord.synonyms
    };
  }

  // 3. Check Local Memory Cache
  if (API_CACHE.has(cleaned)) {
    return API_CACHE.get(cleaned)!;
  }

  // 4. Query Universal English Dictionary API
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleaned)}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const firstEntry = data[0];
    const wordTitle = firstEntry.word || cleaned;

    // Extract phonetic text
    let phoneticText = firstEntry.phonetic || '';
    let audioUrl = '';
    if (Array.isArray(firstEntry.phonetics)) {
      for (const p of firstEntry.phonetics) {
        if (!phoneticText && p.text) phoneticText = p.text;
        if (!audioUrl && p.audio) audioUrl = p.audio;
      }
    }

    // Extract first valid definition and example
    let meaningText = '';
    let exampleText = '';
    let partOfSpeechText = 'noun';
    const synonymsList: string[] = [];

    if (Array.isArray(firstEntry.meanings)) {
      for (const m of firstEntry.meanings) {
        if (m.partOfSpeech && !partOfSpeechText) partOfSpeechText = m.partOfSpeech;
        if (Array.isArray(m.synonyms) && synonymsList.length < 5) {
          synonymsList.push(...m.synonyms);
        }

        if (Array.isArray(m.definitions)) {
          for (const d of m.definitions) {
            if (!meaningText && d.definition) {
              meaningText = d.definition;
              partOfSpeechText = m.partOfSpeech || partOfSpeechText;
            }
            if (!exampleText && d.example) {
              exampleText = d.example;
            }
            if (meaningText && exampleText) break;
          }
        }
        if (meaningText && exampleText) break;
      }
    }

    if (!meaningText) {
      return null;
    }

    // If API provided no example, create an illustrative usage sentence
    if (!exampleText) {
      exampleText = `The term "${wordTitle}" is frequently used in formal discourse and statutory interpretation to express this precise meaning.`;
    }

    const definitionResult: DictionaryDefinition = {
      word: wordTitle,
      source: 'english_dictionary',
      phonetic: phoneticText,
      audioUrl: audioUrl,
      category: 'General & Forensic English',
      partOfSpeech: partOfSpeechText,
      meaning: meaningText,
      example: exampleText,
      synonyms: synonymsList.slice(0, 4)
    };

    // Cache the result
    API_CACHE.set(cleaned, definitionResult);
    return definitionResult;
  } catch {
    // Return null if network failed or word not found in API
    return null;
  }
}
