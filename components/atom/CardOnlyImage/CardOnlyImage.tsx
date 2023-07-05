import {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CardOnlyImage.module.scss';

export const CardOnlyImage = ({content}) => {
    const {source, title, text, link, delay} = content;
    useEffect(() => {
        AOS.init();
    }, [])
    
    return(
        <Link href={link} className={styles.link}>
            <Card 
                className="text-white" 
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={delay}
                data-aos-duration="1000"
            >
                <Card.Img src={source} alt={title} className={styles.cardImg} />
                <Card.ImgOverlay className={styles.cardOverlay}>
                    <div className={styles.cardOverlay_align}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text>
                        <img
                            className='ms-4'
                            width="30"
                            height="30"
                            src="https://img.icons8.com/carbon-copy/100/ffffff/arrow.png"
                            alt="arrow"
                        />
                        </Card.Text>
                    </div>
                    </Card.ImgOverlay>
            </Card>
        </Link>
    )
}