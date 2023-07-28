import { DropdownMenu } from "../../atom/DropdownMenu"
import Link from 'next/link';
import styles from './Header.module.scss';
import { useContext } from "react";
import LanguageContext from "../../../context/languageContext";
import Container from 'react-bootstrap/Container';
import { MobileNav } from "../../atom/MobileNav";
import { useRouter } from "next/router";
import { translations } from "../../../translations/translations";
import { LanguageNav } from "../../atom/LanguageNav";

export const Header = () => {
    const { language } = useContext(LanguageContext);
    const router = useRouter()
    const isHomepage = router.pathname === '/';

    return(
        <div className={`${styles.headerWrapper}`}>
            <Container>
                {/* Reponsive version - mobile */}
                <div className='d-flex d-lg-none justify-content-between w-100'>
                    <MobileNav />
                    {!isHomepage && <h2
                        className={`${styles.logo} my-auto`}
                        ><Link href='/'>HESTIA</Link></h2>}
                    <LanguageNav />
                </div>

                {/* Reponsive version - desktop */}
                <div className='d-none d-lg-flex justify-content-between w-100'>
                    <div className={`my-auto ${styles.menuDesktop}`}>
                        <Link href="/">{translations[language].header.home}</Link>
                        <Link href="/about">{translations[language].header.about}</Link>
                        <Link href="/showcase">{translations[language].header.showcase}</Link>
                        <Link href="/development">{translations[language].header.dev}</Link>
                        <Link href="/designs">{translations[language].header.design}</Link>
                        <Link href="/ai">{translations[language].header.automation}</Link>
                        <Link href="/contact">{translations[language].contact.title}</Link>
                    </div>
                    <div className='d-flex'>
                        <LanguageNav />
                    </div>
                </div>
            </Container>
        </div>
    )
}