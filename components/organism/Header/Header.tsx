import { DropdownMenu } from "../../atom/DropdownMenu"
import Link from 'next/link';
import styles from './Header.module.scss';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import LanguageContext from "../../../context/languageContext";
import Container from 'react-bootstrap/Container';

export const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return(
        <div className={styles.headerWrapper}>
            <Container>
                {/* Reponsive version - mobile */}
                <div className='d-flex d-md-none justify-content-between w-100'>
                    <DropdownMenu />
                </div>

                {/* Reponsive version - desktop */}
                <div className='d-none d-md-flex justify-content-between w-100'>
                    <div className='my-auto'>
                        <Link href="/">Hestia</Link>
                        <Link href="/">About</Link>
                        <Link href="/development">Development</Link>
                        <Link href="/tech/designs">Design</Link>
                        <Link href="/">Automation</Link>
                    </div>
                    <div className='d-flex'>
                        <DropdownMenu />
                    </div>
                </div>
            </Container>
        </div>
    )
}