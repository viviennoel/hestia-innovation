import {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CardImage.module.scss';

export const CardImage = ({content}) => {
    const {source, title, text, link, delay} = content;
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
            <Card.Img variant="top" src={source} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <Link href={link}>
                        Read more
                        <img className='ms-4' width="30" height="30" src="https://img.icons8.com/carbon-copy/100/ffffff/arrow.png" alt="arrow"/>
                    </Link>
                </small>
            </Card.Footer>
        </Card>
    )
}