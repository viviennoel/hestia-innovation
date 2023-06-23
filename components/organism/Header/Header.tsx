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
    console.log(isHomepage)

    return(
        <div className={`${styles.headerWrapper}`}>
            <Container>
                {/* Reponsive version - mobile */}
                <div className='d-flex d-md-none justify-content-between w-100'>
                    <MobileNav />
                    <LanguageNav />
                </div>

                {/* Reponsive version - desktop */}
                <div className='d-none d-md-flex justify-content-between w-100'>
                    <div className='my-auto'>
                        <Link href="/">{translations[language].header.home}</Link>
                        <Link href="/">About</Link>
                        <Link href="/development">Development</Link>
                        <Link href="/tech/designs">Design</Link>
                        <Link href="/">Automation</Link>
                    </div>
                    <div className='d-flex'>
                        <LanguageNav />
                    </div>
                </div>
            </Container>
        </div>
    )
}