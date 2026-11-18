import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ThemeMode, FontMode } from '../types/constitution';
import type { FlashcardDeckType } from '../services/flashcardService';
import {
  getPinnedFlashcardIds,
  togglePinFlashcardInStore,
} from '../services/flashcardPinStore';

interface ThemeContextType {
  theme: ThemeMode;
  font: FontMode;
  setTheme: (theme: ThemeMode) => void;
  setFont: (font: FontMode) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedPartId: string | null;
  setSelectedPartId: (id: string | null) => void;
  selectedSvgId: string | null;
  setSelectedSvgId: (id: string | null) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  dictionaryModalOpen: boolean;
  setDictionaryModalOpen: (open: boolean) => void;
  dictionaryInitialQuery: string;
  setDictionaryInitialQuery: (query: string) => void;
  wordInspectorEnabled: boolean;
  setWordInspectorEnabled: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  bookmarkedArticles: string[];
  toggleBookmark: (artNumber: string) => void;
  activeGameDeck: string;
  setActiveGameDeck: (deck: string) => void;
  launchGameDeck: (deck: string) => void;
  activeFlashcardDeck: FlashcardDeckType | 'all';
  setActiveFlashcardDeck: (deck: FlashcardDeckType | 'all') => void;
  activeFlashcardFilter: string;
  setActiveFlashcardFilter: (filter: string) => void;
  activeFlashcardCardId: string | null;
  clearFlashcardFocusCard: () => void;
  launchFlashcardDeck: (deck: FlashcardDeckType | 'all', subFilter?: string, focusCardId?: string) => void;
  pinnedFlashcardIds: string[];
  togglePinFlashcard: (cardId: string) => boolean;
  vaultModalOpen: boolean;
  setVaultModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('samvidhan_theme') as ThemeMode;
    return saved || 'monochrome';
  });

  const [font, setFont] = useState<FontMode>(() => {
    const saved = localStorage.getItem('samvidhan_font') as FontMode;
    return saved || 'geist';
  });

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [selectedSvgId, setSelectedSvgId] = useState<string | null>('writs-matrix');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [dictionaryModalOpen, setDictionaryModalOpen] = useState<boolean>(false);
  const [dictionaryInitialQuery, setDictionaryInitialQuery] = useState<string>('');
  const [wordInspectorEnabled, setWordInspectorEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('samvidhan_word_inspector');
    return saved !== null ? saved === 'true' : true;
  });
  const [activeGameDeck, setActiveGameDeck] = useState<string>('part3-rights');
  const [activeFlashcardDeck, setActiveFlashcardDeck] = useState<FlashcardDeckType | 'all'>('all');
  const [activeFlashcardFilter, setActiveFlashcardFilter] = useState<string>('all');
  const [activeFlashcardCardId, setActiveFlashcardCardId] = useState<string | null>(null);
  const [pinnedFlashcardIds, setPinnedFlashcardIds] = useState<string[]>(() => getPinnedFlashcardIds());
  const [vaultModalOpen, setVaultModalOpen] = useState<boolean>(false);

  const launchGameDeck = (deck: string) => {
    setActiveGameDeck(deck);
    setActiveTab('tile-matcher');
  };

  const launchFlashcardDeck = (
    deck: FlashcardDeckType | 'all',
    subFilter: string = 'all',
    focusCardId?: string
  ) => {
    setActiveFlashcardDeck(deck);
    setActiveFlashcardFilter(subFilter);
    setActiveFlashcardCardId(focusCardId || null);
    setActiveTab('flashcards');
  };

  const clearFlashcardFocusCard = () => {
    setActiveFlashcardCardId(null);
  };

  const togglePinFlashcard = (cardId: string): boolean => {
    const res = togglePinFlashcardInStore(cardId);
    setPinnedFlashcardIds(res.pinnedIds);
    return res.pinned;
  };

  useEffect(() => {
    localStorage.setItem('samvidhan_word_inspector', String(wordInspectorEnabled));
  }, [wordInspectorEnabled]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_bookmarks');
      return saved ? JSON.parse(saved) : ['Art 21', 'Art 32', 'Art 368'];
    } catch {
      return ['Art 21', 'Art 32', 'Art 368'];
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('samvidhan_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('samvidhan_font', font);
  }, [font]);

  const toggleBookmark = (artNumber: string) => {
    setBookmarkedArticles((prev) => {
      const next = prev.includes(artNumber)
        ? prev.filter((a) => a !== artNumber)
        : [...prev, artNumber];
      localStorage.setItem('samvidhan_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        font,
        setTheme,
        setFont,
        activeTab,
        setActiveTab,
        selectedPartId,
        setSelectedPartId,
        selectedSvgId,
        setSelectedSvgId,
        searchOpen,
        setSearchOpen,
        dictionaryModalOpen,
        setDictionaryModalOpen,
        dictionaryInitialQuery,
        setDictionaryInitialQuery,
        wordInspectorEnabled,
        setWordInspectorEnabled,
        bookmarkedArticles,
        toggleBookmark,
        activeGameDeck,
        setActiveGameDeck,
        launchGameDeck,
        activeFlashcardDeck,
        setActiveFlashcardDeck,
        activeFlashcardFilter,
        setActiveFlashcardFilter,
        activeFlashcardCardId,
        clearFlashcardFocusCard,
        launchFlashcardDeck,
        pinnedFlashcardIds,
        togglePinFlashcard,
        vaultModalOpen,
        setVaultModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
