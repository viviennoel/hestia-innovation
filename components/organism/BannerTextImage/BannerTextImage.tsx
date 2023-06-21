import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './BannerTextImage.module.scss'
import { BannerTextImageProps } from '../../../types/componentProps';
import Button from 'react-bootstrap/Button';

export const BannerTextImage = ({imageSrc, title, body, link, linkPlaceholder, variation, textSide}: BannerTextImageProps) => {
    const isVisibleButton = linkPlaceholder && link;
    const isTextRight = textSide === 'right';

    return(
        <div 
            className={`mb-5 ${getVariationStyle(variation)}`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
        >
            <Container className={`py-4 ${styles.container}`}>
                <Row>
                    {textSide === 'right' && 
                    <Col md className='d-none d-md-block'>
                        <div className={styles.image} style={{backgroundImage:`url(${imageSrc})`}}></div>
                    </Col>}
                    <Col md>
                        <h2 className='pb-4 pb-md-3'>{title}</h2>

                        <Col className='d-md-none pb-4'>
                            <div className={styles.image} style={{backgroundImage:`url(${imageSrc})`}}></div>
                        </Col>

                        <p className={`pb-md-3 ${styles.body}`}>{body}</p>
                        {isVisibleButton && <Button href={link} className={`${styles.button}`}>{linkPlaceholder}</Button>}
                    </Col>
                    {textSide !== 'right' &&
                    <Col md className={`${!isTextRight ? 'pt-3 pt-md-0' : ''} d-none d-md-block`}>
                        <div className={styles.image} style={{backgroundImage:`url(${imageSrc})`}}></div>
                    </Col>}
                </Row>
            </Container>
        </div>
    )
}

const getVariationStyle = (variation):string => {
    switch(variation){
        case("light"):
            console.log('this is the variation', styles.lightBanner)
            return styles.lightBanner;
        default:
            return styles.darkBanner;
    }
}