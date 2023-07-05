import Container from 'react-bootstrap/Container';
import styles from './Subtitle.module.scss';

export const Subtitle = ({content}:{content:string}) => {
    return (
    <Container>
        <h2 className={`pb-4 ${styles.title}`}>{content}</h2>
    </Container>
    )
}