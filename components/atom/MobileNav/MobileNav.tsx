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
        <Dropdown.Item>
          <Link href="/">{translations[language].header.home}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="/development">{translations[language].header.development}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="/design">{translations[language].header.design}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="/ia">{translations[language].header.IA}</Link>
        </Dropdown.Item>

        <div className='d-flex justify-content-between'>
          <h2 className={styles.subsection}>Languages</h2>
          <img width="30" height="30" src={`https://img.icons8.com/color/48/${country}.png`} alt="country" className='my-auto'/>
        </div>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.FRANCE)}>
          Français <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.FRANCE}.png`} alt={country}/>
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.GREAT_BRITAIN)}>
          English <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.GREAT_BRITAIN}.png`} alt={country}/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}