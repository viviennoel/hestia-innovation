import { Header } from '../components/organism/Header'
import "../styles/globals.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import LanguageContext from "../context/languageContext";
import { Footer } from '../components/organism/Footer';

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState<string>("en-GB");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Retrieve the language from localStorage if available, or set a default language
      const storedLanguage = window.localStorage.getItem("language");
      const currentLanguage = storedLanguage ? storedLanguage : window.location;
      console.log(currentLanguage)
      setLanguage(currentLanguage.toString());
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever the language changes
    language !== "" && localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </LanguageContext.Provider>
  );
}
