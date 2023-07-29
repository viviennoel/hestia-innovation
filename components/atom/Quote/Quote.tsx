import styles from './Quote.module.scss';
import Container from 'react-bootstrap/Container';

export const Quote = ({title, text}: {title:string, text:string}) => {
    return(
        <Container>
            <div className={`text-center ${styles.quote}`}>
                <h3 className={styles.title}>{title}</h3>
                <h5 className={styles.subtitle}>
                    <img className='me-2' width="30" height="30" src="https://img.icons8.com/sf-ultralight/50/quote.png" alt="quote"/>
                    {text}
                </h5>
            </div>
        </Container>
    )
}