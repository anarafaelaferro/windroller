import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with a default value of 'en'
const LocaleContext = createContext({
  locale: 'en', // Default locale
  setLocale: () => {}, // A placeholder function for setting locale
});

export const LocaleProvider = ({ children }) => {
  // Get the locale from localStorage or default to 'en'
  const getInitialLocale = () => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      return savedLocale || navigator.language.split('-')[0] || 'en'; // Use browser language if available
    }
    return 'en'; // Fallback for server-side rendering
  };

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale);

  useEffect(() => {
    // Sync locale with localStorage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', currentLocale);
    }
  }, [currentLocale]);

  const handleLocaleChange = (newLocale) => {
    setCurrentLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, setLocale: handleLocaleChange }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Hook to use locale context in other components
export const useLocale = () => {
  return useContext(LocaleContext);
};
