import { HighLightsProps } from "../../../types/componentProps";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './HighlightHover.module.scss';
import { CardOnlyImage } from '../../atom/CardOnlyImage/CardOnlyImage';

export const HighlightHover = ({content}:HighLightsProps) => {
    return(
        <Container className={styles.container}>
          <Row>
            {content.map((cardContent, index) => 
                <Col md key={`${cardContent.text}${index}`} className='mb-5'>
                    <CardOnlyImage content={cardContent} />
                </Col>)}
          </Row>
        </Container>
    )
}