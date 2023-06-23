import { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import LanguageContext from '../../../context/languageContext';
import styles from './LanguageNav.module.scss';
import Link from 'next/link';
import { translations } from '../../../translations/translations';

export const LanguageNav = () => {
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
        <img width="30" height="30" src={`https://img.icons8.com/color/48/${country}.png`} alt="france"/>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        <div className='d-flex justify-content-between'>
          <h2 className={styles.subsection}>Languages</h2>
        </div>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.FRANCE)} className='d-flex justify-content-between pb-2'>
          <span className='me-5'>Français</span> <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.FRANCE}.png`} alt={country}/>
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.GREAT_BRITAIN)} className='d-flex justify-content-between pb-2'>
          <span className='me-5'>English</span> <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.GREAT_BRITAIN}.png`} alt={country}/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}