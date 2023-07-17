import {BannerImage} from './../components/organism/BannerImage';
import {AnimatedText} from './../components/atom/AnimatedText/AnimatedText';
import {Subtitle} from './../components/atom/Subtitle/Subtitle';
import { useContext } from 'react';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './../styles/pages/contact.module.scss';

const Contact = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div>
            <BannerImage 
                size='medium'
                background='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
            >
                <AnimatedText words={translations[language].titleGoodPractices} />
            </BannerImage>
            <div className='mb-5'>
                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container className='mb-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Votre email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I accept the general conditions of use" />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )}

export default Contact;