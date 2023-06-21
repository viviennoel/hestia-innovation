import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardImage } from '../../atom/Card/CardImage';
import styles from './Highlights.module.scss';
import { HighLightsProps } from './../../../types/componentProps'

export const Highlights = ({content}:HighLightsProps) => {
    console.log(content)
    
    return(
      <div className='mt-5'>
        <Container className={styles.container}>
          <Row>
            {content.map((cardContent) => <Col md key={cardContent.text} className='mb-5'><CardImage content={cardContent} /></Col>)}
          </Row>
        </Container>
      </div>
    )
}