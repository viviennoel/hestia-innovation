import AWS from 'aws-sdk';
import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/languageContext';
import { createClient } from 'pexels';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import styles from './ai.module.scss';
import { ButtonCustom } from './../components/atom/Button';

const AI = () => {
const [anwswer, setAnswer] = useState(undefined);
const [status, setStatus] = useState('input');
const [image, setImage] = useState({
  src: undefined,
  alt: undefined,
});
const [formData, setFormData] = useState({question: "", image: "", pswd:""});
const { language } = useContext(LanguageContext);

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    if(language !== 'en-SET'){
      setStatus('loading');
      const text = await getTextFromOpenAI();
      const articleImage = await getPictureFromPexel();
      const result = await postOnLinkedIn(text, articleImage);
      setStatus('success')
    }
}

AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

const lambda = new AWS.Lambda();

const getTextFromOpenAI = async () => {
  try {
    const params = {
      FunctionName: 'chatgpt',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({ question: formData.question, pswd: formData.pswd }),
    };

    const response = await lambda.invoke(params).promise();
    const data = JSON.parse(response.Payload as string);
    setAnswer(data.body);

    return data.body;
  } catch (error) {
    console.log(error);
  }
};

type Photos = {
  photos:{
    src: {landscape:string},
    alt: string
    }[]
  }
const getPictureFromPexel = async () => {
  const client = createClient('fcSMShcb7yct8Q4fudxM2Pk3b94LC1j9oia2JBPBVQQe2B8Pgyxm0VX1');
  const query = formData.image;

  return client.photos.search({ query, per_page: 1 })
    .then(result => {
      const imagePexel = {

        src: (result as Photos).photos[0].src.landscape,
        alt: (result as Photos).photos[0].alt,
      }

      setImage(imagePexel);
      return imagePexel;
    });
}

const postOnLinkedIn = (text:string, articleImage:{src:string, alt: string}) => {
  const body= {
    text: text,
    articleImage,
}

fetch("https://vivien-thomas-noel.npkn.net/5c2b24/", {
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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const resetStatus = () => {
  setStatus('input');
  setAnswer(undefined);
  setImage({
    src: undefined,
    alt: undefined,
  });
  setFormData({question: "", image: "", pswd:""});
}
    
return (
    <Container className={styles.container}>
          <div className={status === 'loading' ? styles.spinner : styles.linkedin}>
            {((!anwswer || !image.src) && status === 'loading') &&
              <div className='m-auto'>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>}
              {anwswer && <p style={{paddingTop: '15vh'}} className='text-center px-5'>{anwswer}</p>}
              {image.src && <img src={image.src} alt={image.alt} className='w-100 pb-5'></img>}
            </div>

            <div className='m-auto'>
              {status === 'success' ? 
              <div className={`${styles.form} text-center`}>
                <h2 className='pb-5'>Your post have been posted!</h2>
                <button onClick={resetStatus} className={styles.button}>Create a new post!</button>
              </div>
              :<form onSubmit={handleSubmit} className={`${styles.form} text-center`}>
                <h2 className='pb-5 text-center'>LinkedIn post by IA</h2>
                <label htmlFor="name">Subject of the post</label>
                <input type="text" id="question" name="question" value={formData.question}  onChange={handleChange} className={styles.input} required/>
                
                <label htmlFor="name">Find an image to illustrate the post</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className={styles.input} required/>
                
                <label htmlFor="name">Admin password</label>
                <input type="text" id="pswd" name="pswd" value={formData.pswd} onChange={handleChange} className={styles.input} required/>
                
                <button type="submit" className={styles.button}>Submit</button>
              </form>}
            </div>
    </Container> 
)
}

export default AI;