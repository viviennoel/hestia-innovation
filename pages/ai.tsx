import AWS from 'aws-sdk';
import { useContext, useState } from 'react';
import LanguageContext from '../context/languageContext';
import { createClient } from 'pexels';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import styles from './../styles/pages/ai.module.scss';
import {BannerImage} from './../components/organism/BannerImage';
import {BannerTextImage} from './../components/organism/BannerTextImage';
import {BulletPoints} from './../components/organism/BulletPoints/BulletPoints';
import {AnimatedText} from './../components/atom/AnimatedText/AnimatedText';
import {Subtitle} from './../components/atom/Subtitle/Subtitle';
import CarouselComponent from './../components/organism/Carousel/CarouselComponent'

import { translations } from '../translations/translations';
import { postOnFacebook } from '../helpers/facebook';

const AI = () => {
const [anwswer, setAnswer] = useState(undefined);
const [status, setStatus] = useState('input');
const [image, setImage] = useState({
  src: undefined,
  alt: undefined,
});
const [formData, setFormData] = useState({question: "", image: "", pswd:""});
const { language } = useContext(LanguageContext);

const contentBulletPoint = [{
  img: translations['en-GB'].automation.bullets[0].bulletsImage.src,
  title: translations[language].automation.bullets[0].title,
  text:translations[language].automation.bullets[0].description,
},
{
  img: translations['en-GB'].automation.bullets[1].bulletsImage.src,
  title: translations[language].automation.bullets[1].title,
  text:translations[language].automation.bullets[1].description,
},
{
  img: translations['en-GB'].automation.bullets[2].bulletsImage.src,
  title: translations[language].automation.bullets[2].title,
  text:translations[language].automation.bullets[2].description,
},
{
  img: translations['en-GB'].automation.bullets[3].bulletsImage.src,
  title: translations[language].automation.bullets[3].title,
  text:translations[language].automation.bullets[3].description,
}]

const contentCarousel = [
  {
    source: translations['en-GB'].automation.articlesCarousel[0].carouselImage.src,
    alt: translations[language].automation.articlesCarousel[0].carouselImage.alt,
    link: '/articles/',
    title: translations[language].automation.articlesCarousel[0].title,
    text: translations[language].automation.articlesCarousel[0].description
  },
  {
    source: translations['en-GB'].automation.articlesCarousel[1].carouselImage.src,
    alt: translations[language].automation.articlesCarousel[1].carouselImage.alt,
    link: '/articles/',
    title: translations[language].automation.articlesCarousel[1].title,
    text: translations[language].automation.articlesCarousel[1].description
  },
  {
    source: translations['en-GB'].automation.articlesCarousel[2].carouselImage.src,
    alt: translations[language].automation.articlesCarousel[2].carouselImage.alt,
    link: '/articles/',
    title: translations[language].automation.articlesCarousel[2].title,
    text: translations[language].automation.articlesCarousel[2].description
  }
]

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const isLocalServer = process.env.NEXT_PUBLIC_ENV === 'dev';
    
    if(language !== 'en-SET' && !isLocalServer){
      setStatus('loading');
      const text = await getTextFromOpenAI();
      const articleImage = await getPictureFromPexel();
      await postOnLinkedIn(text, articleImage);
      setStatus('success')
    } else if(language !== 'en-SET'){
      const text = await getTextFromOpenAI();
      const articleImage = await getPictureFromPexel();
      // await postOnFacebook(text, articleImage);
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
    .then(result => console.log('ai', result))
    .catch(error => console.log('error_ai', error));
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
  <>
    <BannerImage 
        size='medium'
        background={translations['en-GB'].automation.src}
    >
        <AnimatedText words={translations[language].automation.title} />
    </BannerImage>
    <Container>
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

            <div className='m-auto mb-5'>
              {status === 'success' ? 
              <div className={`${styles.form} text-center`}>
                <h2 className='pb-5'>{translations[language].automation.success}</h2>
                <button onClick={resetStatus} className={styles.button}>{translations[language].automation.newPost}</button>
              </div>
              :<form onSubmit={handleSubmit} className={`${styles.form} text-center`}>
                <h2 className='pb-5 text-center'>{translations[language].automation.form.title}</h2>
                <label htmlFor="name">{translations[language].automation.form.subject}</label>
                <input type="text" id="question" name="question" value={formData.question}  onChange={handleChange} className={styles.input} required/>
                
                <label htmlFor="name">{translations[language].automation.form.title}</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className={styles.input} required/>
                
                <label htmlFor="name">{translations[language].automation.form.password}</label>
                <input type="password" id="pswd" name="pswd" value={formData.pswd} onChange={handleChange} className={styles.input} required/>
                
                <button type="submit" className={styles.button}>{translations[language].automation.form.submit}</button>
              </form>}
            </div>
    </Container>

    <Subtitle content={translations[language].automation.section1Title} />
    <BannerTextImage
        imageSrc={translations['en-GB'].automation.bannerSection1Image.src}
        title={translations[language].automation.bannerSection1Title} 
        body={translations[language].automation.bannerSection1Description} 
        link='/articles/'
        linkPlaceholder={translations[language].automation.bannerSection1Button}
        variation='light'
        textSide='right'
    />

    <Subtitle content={translations[language].automation.section2Title} />
    <CarouselComponent content={contentCarousel}></CarouselComponent> 

    <BannerTextImage
        imageSrc={translations['en-GB'].automation.bannerSection2Image.src}
        title={translations[language].automation.bannerSection2Title} 
        body={translations[language].automation.bannerSection2Description} 
        link='/articles/'
        linkPlaceholder={translations[language].automation.bannerSection2Button}
        variation='light'
        textSide='right'
    />

    <Subtitle content={translations[language].automation.section3Title} />
    <BulletPoints content={contentBulletPoint}/> 

    <Subtitle content={translations[language].automation.section4Title} />
    <BannerTextImage
        imageSrc={translations['en-GB'].automation.bannerSection4Image.src}
        title={translations[language].automation.bannerSection4Title} 
        body={translations[language].automation.bannerSection4Description} 
        link='/articles/'
        linkPlaceholder={translations[language].automation.bannerSection4Button}
        variation='light'
        textSide='right'
    />
  </>
)
}

export default AI;