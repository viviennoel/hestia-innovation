import {ButtonCustom} from './../../atom/Button';
import styles from './RedirectionHomepage.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import LanguageContext from '../../../context/languageContext';
import { translations } from '../../../translations/translations';

export const RedirectionHomepage = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div className={styles.RedirectionWrapper}>
            <div className='mb-3'>
                <ButtonCustom variation='dark'><Link href='/showcase'>{translations[language].discover}</Link></ButtonCustom>
            </div>
            <div>
                <ButtonCustom variation='dark'><Link href='/contact'>{translations[language].contact.title}</Link></ButtonCustom>
            </div>
        </div>
    )
}