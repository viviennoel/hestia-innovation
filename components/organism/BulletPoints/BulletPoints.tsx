import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BulletPointsProps } from './../../../types/componentProps';
import styles from './BulletPoints.module.scss';

export const BulletPoints = (props:{content:BulletPointsProps[]}) => {
    return(
        <Container>
            <div className={`${styles.container} mb-5 mt-3 m-auto`}>
                {props.content.map((bulletPoint, index) => 
                    <Row className='d-flex ms-md-5 mb-5 mb-md-0 text-center' key={`item${index}`}>
                        <Col md={4} 
                            style={{ backgroundImage: `url(${bulletPoint.img})` }}
                            className={`${styles.image} mb-3 mt-md-3`}
                            data-aos="fade-down"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                        ></Col>
                        <Col md={8} 
                            className='ms-md-5 m-auto'
                            data-aos="fade-right"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                        >
                            <h4>{bulletPoint.title}</h4>
                            <p>{bulletPoint.text}</p>
                        </Col>
                    </Row>
                )}
            </div>
        </Container>
    )
}
