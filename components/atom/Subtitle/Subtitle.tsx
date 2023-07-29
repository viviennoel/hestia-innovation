import Container from 'react-bootstrap/Container';
import styles from './Subtitle.module.scss';

export const Subtitle = ({content}:{content:string}) => {
    return (
    <Container>
        <h2 className={`pb-4 ${styles.title}`} data-aos="fade"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
            data-aos-duration="1000">{content}</h2>
    </Container>
    )
}