import { useContext } from 'react';
import LanguageContext from '../../../context/languageContext';
import styles from './Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { translations } from '../../../translations/translations';

export const Footer = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div className={`${styles.footer} py-5`}>
            <Container>
                <Col md className='d-none d-md-block'>
                    <h2 className={styles.image}>{translations[language].header.home}</h2>
                    <ul className='mb-0'>
                        <li>{translations[language].header.home}</li>
                        <li>{translations[language].header.home}</li>
                        <li>{translations[language].header.home}</li>
                        <li>{translations[language].header.home}</li>
                        <li>{translations[language].header.home}</li>
                    </ul>

                </Col>
            </Container>
        </div>
    )
}
