import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardImage } from '../../atom/Card/CardImage';
import styles from './Highlights.module.scss';
import { HighLightsProps } from './../../../types/componentProps'

export const Highlights = ({content}:HighLightsProps) => {
    return(
      <div>
        <Container className={styles.container}>
          <Row>
            {content.map((cardContent, index) => <Col md key={`${cardContent.text}${index}`} className='mb-5'><CardImage content={cardContent} /></Col>)}
          </Row>
        </Container>
      </div>
    )
}