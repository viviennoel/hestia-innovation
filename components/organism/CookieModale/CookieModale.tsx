import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../../context/languageContext";
import { translations } from "../../../translations/translations";
import styles from './CookieModale.module.scss';
import Link from 'next/link';
import { LanguageNav } from "../../atom/LanguageNav";

export const CookieModale = () => {
    const { language } = useContext(LanguageContext);
    const [cookies, setCookies] = useState(undefined);

    useEffect(()=> {
        if(typeof window !== undefined){
            const localCookies = window.localStorage.getItem('cookies')
            
            if(cookies){
                cookies.toString() !== localCookies && setCookies(cookies);
            } else {
                localCookies === 'true' && setCookies(true);
                localCookies === 'false' && setCookies(false);
                !localCookies && setCookies(null);
            }

            console.log(cookies ? cookies.toString() !== localCookies : 'undefined')
            console.log(localCookies)
            console.log(cookies)
        }
    }, [cookies])

    const setCookiesLocal = (status:boolean) => {
        setCookies(status);
        window.localStorage.setItem('cookies', status.toString())
    }
    
    return(
        <div className={`${styles.mask} ${cookies === null ? 'd-flex' : 'd-none'}`}>
            <div className='px-2 d-flex m-auto'>
                <div className={styles.modale}>
                    <div className={styles.language}>
                        <LanguageNav/>
                    </div>
                    <h2 className='text-center pb-4'>
                    <img width="48" height="48" className='me-2' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cookie-bakery-flaticons-lineal-color-flat-icons-5.png" alt="what is a cookie"/>
                    {translations[language].cookie.title}
                    </h2>
                    <p className='pb-4'>
                        {translations[language].cookie.text}
                        <Link href='/legal/privacy-policy' className={`${styles.link} ${styles.notUnderlined}`}>{translations[language].cookie.policy}</Link>
                    </p>
                    <div className='w-100 pb-5 d-flex'>
                        <p>{translations[language].cookie.statistiques}</p>
                        <img width="48" height="48" src="https://img.icons8.com/color/48/futures--v1.png" alt="statistiques" className='ms-5'/>
                    </div>
                    <div className='d-md-flex justify-content-between text-center text-md-left'>
                        <Link href='/legal/cookie-settings' className={`${styles.link} mb-4 mb-md-0`}>{translations[language].cookie.settings}</Link>
                        <div>
                            <button className={`${styles.buttonRefuse} me-3 mt-4 mt-md-0`} onClick={()=>setCookiesLocal(false)}>{translations[language].cookie.refuse}</button>
                            <button className={`${styles.buttonAccept}`} onClick={()=>setCookiesLocal(true)}>{translations[language].cookie.accept}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}