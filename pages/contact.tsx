import {BannerImage} from './../components/organism/BannerImage';
import {AnimatedText} from './../components/atom/AnimatedText/AnimatedText';
import {Subtitle} from './../components/atom/Subtitle/Subtitle';
import { useContext, useState } from 'react';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './../styles/pages/contact.module.scss';

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({email: "", message: ""});
    const [status, setStatus] = useState(undefined);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(language !== 'en-SET'){
            setStatus('loading')
            const result = await sendEmail(formData.email, formData.message);
        }
    }

    const sendEmail = (email:string, message: string) => {
        const body= { email, message }
      
      fetch("https://vivien-thomas-noel.npkn.net/74d768/", {
          headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origins": "*",
            "Access-Control-Allow-Methods": "*",
          },
          method: 'POST',
          body: JSON.stringify(body),
      })
          .then(result => setStatus('success'))
          .catch(error => setStatus('error'));
      }

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
                    <Form  onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{translations[language].contact.email}</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"  name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{translations[language].contact.message}</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="message" value={formData.message} onChange={handleChange} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" required label="I accept the general conditions of use" />
                        </Form.Group> */}
                        <Button variant="dark" type="submit">
                            {translations[language].contact.send}
                        </Button>
                        {status === 'loading' && <p>{translations[language].contact.analysing}</p>}
                        {status === 'success' && <p>{translations[language].contact.valid}</p>}
                        {status === 'error' && <p>{translations[language].contact.error}</p>}
                    </Form>
                </Container>
            </div>
        </div>
    )}

export default Contact;