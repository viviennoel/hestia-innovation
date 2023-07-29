import Link from 'next/link';
import { useContext } from 'react';
import LanguageContext from '../../../context/languageContext';
import { translations } from '../../../translations/translations';
import styles from './ContactFixed.module.scss';

export const ContactFixed = () => {
    const { language } = useContext(LanguageContext);

    return(
    <div className={styles.buttonFixed}>
        <Link href='/contact'>{translations[language].contact.title}</Link>
    </div>) 
}