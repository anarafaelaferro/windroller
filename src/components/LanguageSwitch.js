import React from 'react';
import { Link } from 'gatsby';
import { useLocale } from './context/LocaleContext';
import { useLocation } from '@reach/router';

import { NAVIGATION_LINKS } from './navigation/content';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  const location = useLocation();
  const currentPath = location.pathname;

  const pagesInLocale = NAVIGATION_LINKS[locale];
  // find page where link is equal to currentPath
  const currentPageKey = Object.keys(pagesInLocale).find(key => pagesInLocale[key].link === currentPath);

  const localeLinksForCurrentPage = {
    en: NAVIGATION_LINKS.en[currentPageKey]?.link,
    pt: NAVIGATION_LINKS.pt[currentPageKey]?.link,
    fr: NAVIGATION_LINKS.fr[currentPageKey]?.link,
  };

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);

    const newLink = localeLinksForCurrentPage[newLocale];

    // navigate to the page in the new locale
    if(newLink !== currentPath) {
      window.location.href = newLink;
    }
  };

  return (
    <div style={{ margin: "15px 0"}}>
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('pt')}>PT</button>
      <button onClick={() => handleLanguageChange('fr')}>FR</button>
    </div>
  );
};

export default LanguageSwitcher;
