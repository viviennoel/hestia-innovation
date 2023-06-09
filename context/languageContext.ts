import { createContext } from "react";

const LanguageContext = createContext({
  language: 'fr-fr',
  setLanguage: (language) => {}
});

export default LanguageContext;