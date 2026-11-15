import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ThemeMode, FontMode } from '../types/constitution';

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
