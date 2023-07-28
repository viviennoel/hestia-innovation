import {useContext, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CardImage.module.scss';
import { translations } from "../../../translations/translations";
import LanguageContext from "../../../context/languageContext";

export const CardImage = ({content, cta}) => {
    const {source, title, text, link, delay} = content;
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <Card 
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={delay}
            data-aos-duration="1000"
            className={styles.card}
        >
            <Card.Img variant="top" height={200} className={styles.image} src={source} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            </Card.Body>
            {cta!==false && <Card.Footer className='pb-2'>
                <small className="text-muted">
                    <Link href={link}>
                        {translations[language].more}
                    </Link>
                </small>
            </Card.Footer>}
        </Card>
    )
}