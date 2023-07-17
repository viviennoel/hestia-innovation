import styles from './../styles/pages/about.module.scss';
import { Subtitle } from '../components/atom/Subtitle/Subtitle';
import { Quote } from '../components/atom/Quote/Quote';
import { translations } from '../translations/translations';
import { useContext } from 'react';
import LanguageContext from '../context/languageContext';
import { BannerTextImage } from '../components/organism/BannerTextImage';
import { AnimatedText } from '../components/atom/AnimatedText/AnimatedText';
import Container from 'react-bootstrap/Container';
import {BulletPoints} from './../components/organism/BulletPoints/BulletPoints';

const About = () => {
    const { language } = useContext(LanguageContext);

    const contentBulletPoint = [{
        img: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
        title: translations[language].titleAI,
        text:translations[language].subtitleAI,
    }]
    
    return(
        <div>
            <div className={styles.model3D}>
                <iframe className={styles.iframe} title="VR Meeting Office | Conference Room | Baked" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0bedb56a494f4d0cb1443af6d496c4f2/embed?autostart=1&dnt=1"> </iframe> 
                <div className={`${styles.navigate} d-flex justify-content-center`}>
                    <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/street-view.png" alt="street-view"/>
                    <h5 className='my-auto ps-3'>{translations[language].about.navigate}</h5>
                </div>
                <AnimatedText words={translations[language].titleGoodPractices} />
            </div>
            <div className={styles.background}></div>

            <Quote title={translations[language].quote.development.title} text={translations[language].quote.development.author}></Quote>
            
            <Subtitle content={translations[language].showcase.discoverArticles} />
            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
                variation='light'
                textSide='right'
            />

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <Container className='mb-5'>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
            </Container>

            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
                textSide='left'
                variation='light'
            />

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <BulletPoints content={contentBulletPoint}/> 

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
                variation='light'
                textSide='right'
            />

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <Container className='mb-5'>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
                <p>{translations[language].HomePresentation.linkPlaceholder}</p>
            </Container>
        </div>
    )
}

export default About;