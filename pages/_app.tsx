import { Header } from '../components/organism/Header'
import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import { Suspense } from 'react';
import LanguageContext from "../context/languageContext";
import { Footer } from '../components/organism/Footer';
import { useRouter } from 'next/router';
import { CookieModale } from '../components/organism/CookieModale/CookieModale';

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState<string>("en-SET");
  const router = useRouter()
  const isHomepage = router.pathname === '/';

  const getNavigatorLanguage = () => {
    if(navigator.language === 'en-GB' || navigator.language === 'fr-FR'){
      return navigator.language;
    }

    return 'en-GB';
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      // Retrieve the language from localStorage if available, or set a default language
      const storedLanguage = window.localStorage.getItem("language");
      const currentLanguage = storedLanguage ? storedLanguage : getNavigatorLanguage();
      setLanguage(currentLanguage.toString());
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever the language changes
    language !== "en-SET" && localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <CookieModale />
      <Header {...pageProps} />
      <Component {...pageProps} />
      {!isHomepage && <Footer />}
    </LanguageContext.Provider>
  );
}
