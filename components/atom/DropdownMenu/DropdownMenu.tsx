import { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import LanguageContext from '../../../context/languageContext';
import styles from './DropdownMenu.module.scss'

export const DropdownMenu = () => {
    const [country, setCountry] = useState("france");
    const { setLanguage } = useContext(LanguageContext);

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
      <Dropdown.Toggle variant="light" className={styles.toogle}>
        <img width="30" height="30" src={`https://img.icons8.com/color/48/${country}.png`} alt={country} className='me-2'/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.FRANCE)}>
          France <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.FRANCE}.png`} alt={country}/>
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>updateLanguage(Countries.GREAT_BRITAIN)}>
          English <img width="30" height="30" src={`https://img.icons8.com/color/48/${Countries.GREAT_BRITAIN}.png`} alt={country}/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}