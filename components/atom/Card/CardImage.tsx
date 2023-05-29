import {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            data-aos-duration="1500"
        >
            <Card.Img variant="top" src={source} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted"><Link href={link}>Read more</Link></small>
            </Card.Footer>
        </Card>
    )
}