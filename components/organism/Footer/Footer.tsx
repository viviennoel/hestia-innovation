import { useContext } from 'react';
import LanguageContext from '../../../context/languageContext';
import styles from './Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { translations } from '../../../translations/translations';
import { ButtonCustom } from '../../atom/Button';
import Link from 'next/link';

export const Footer = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div className={`${styles.footer} py-5`}>
            <Container>
                <Row>
                    <Col md>
                        <h2>{translations[language].footer.title}</h2>
                        <p className='mb-0'>{translations[language].footer.description}</p>
                        <ButtonCustom variation='clear'>
                            <Link href='/about'>{translations[language].more}</Link>
                        </ButtonCustom>
                    </Col>
                    <Col md className='mt-5 mt-md-0'>
                        <h2>{translations[language].footer.quickLinks}</h2>
                        <Row>
                            <Col>
                                <ul className='mb-0'>
                                    <li>
                                        <Link href='/'>
                                            {translations[language].footer.nav1}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>
                                            {translations[language].footer.nav2}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/showcase'>
                                            {translations[language].footer.nav3}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/development'>
                                            {translations[language].footer.nav4}
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className='mb-0'>
                                    <li>
                                        <Link href='/designs'>
                                            {translations[language].footer.nav5}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/ai'>
                                            {translations[language].footer.nav6}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>
                                            {translations[language].footer.nav7}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal">
                                            {translations[language].footer.legal}
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
