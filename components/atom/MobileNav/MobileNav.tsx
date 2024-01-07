import { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import LanguageContext from '../../../context/languageContext';
import styles from './MobileNav.module.scss';
import Link from 'next/link';
import { translations } from '../../../translations/translations';

export const MobileNav = () => {
    const [country, setCountry] = useState("france");
    const { language } = useContext(LanguageContext);

  useEffect(()=>{
    const language = window.localStorage.getItem("language")
    setCountry(language === "fr-FR" ? "france" : 'great-britain')
  }, [country])

    return(
    <Dropdown>
      <Dropdown.Toggle className={`${styles.toogle} d-flex`}>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" alt="menu--v1"/>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        
      <h2 className={styles.subsection}>{translations[language].header.navigation}</h2>
        <Dropdown.Item className='pb-4' href="/">
          {translations[language].header.home}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/showcase">
          {translations[language].header.showcase}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/articles">
          {translations[language].header.articles}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4'  href="/development">
          {translations[language].header.dev}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/designs">
          {translations[language].header.design}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/ai">
          {translations[language].header.automation}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/about">
          {translations[language].header.about}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/contact">
          {translations[language].header.contact}
        </Dropdown.Item>
        <Dropdown.Item className='pb-4' href="/legal">
          {translations[language].header.legal}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}