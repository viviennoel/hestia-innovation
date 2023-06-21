import { createContext } from "react";

const LanguageContext = createContext({
  language: 'fr-FR',
  setLanguage: (_language) => {}
});

export default LanguageContext;