import { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import LanguageContext from '../../../context/languageContext';
import styles from './MobileNav.module.scss';
import Link from 'next/link';
import { translations } from '../../../translations/translations';

export const MobileNav = () => {
    const [country, setCountry] = useState("france");
    const { language, setLanguage } = useContext(LanguageContext);

  useEffect(()=>{
    const language = window.localStorage.getItem("language")
    setCountry(language === "fr-FR" ? "france" : 'great-britain')
  }, [country])

    const updateLanguage = (language:string) => {
      setCountry(language)
      switch(language) {
        case(Countries.FRANCE):
          window.localStorage.setItem("language", 'fr-FR')
          setLanguage('fr-FR');
          break;
        case (Countries.GREAT_BRITAIN):
          window.localStorage.setItem("language", 'en-GB')
          setLanguage('en-GB');
          break;
        default:
          window.localStorage.setItem("language", 'en-GB')
          setLanguage('en-GB');
      }
    }

    enum Countries {
      FRANCE = 'france',
      GREAT_BRITAIN = 'great-britain'
    }

    return(
    <Dropdown>
      <Dropdown.Toggle variant="light" className={`${styles.toogle} d-flex`}>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" alt="menu--v1"/>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        
      <h2 className={styles.subsection}>Navigation</h2>
        <Dropdown.Item className='pb-2' href="/">
          {translations[language].header.home}
        </Dropdown.Item>
        <Dropdown.Item className='pb-2'  href="/development">
          {translations[language].header.development}
        </Dropdown.Item>
        <Dropdown.Item className='pb-2' href="/design">
          {translations[language].header.design}
        </Dropdown.Item>
        <Dropdown.Item className='pb-2' href="/ia">
          {translations[language].header.IA}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}