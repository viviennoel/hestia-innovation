import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardImage } from '../../atom/Card/CardImage';
import styles from './Highlights.module.scss';

export const Highlights = () => {
    let content = [
        {
            source:'',
            title:'title',
            text:'text',
            link:'/',
            delay:'500'
        },
        {
            source:'',
            title:'title',
            text:'text',
            link:'/',
            delay:'600'
        },
        {
            source:'',
            title:'title',
            text:'text',
            link:'/',
            delay:'700'
        }
    ]

    return(
        <Container className={styles.container}>
          <Row>
            {content.map((cardContent) => <Col md><CardImage content={cardContent} /></Col>)}
          </Row>
        </Container>
    )
}