import styles from './../styles/pages/about.module.scss';
import { Subtitle } from '../components/atom/Subtitle/Subtitle';
import { Quote } from '../components/atom/Quote/Quote';
import { translations } from '../translations/translations';
import { BannerImage } from '../components/organism/BannerImage';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import LanguageContext from '../context/languageContext';
import { BannerTextImage } from '../components/organism/BannerTextImage';
import { AnimatedText } from '../components/atom/AnimatedText/AnimatedText';
import Container from 'react-bootstrap/Container';
import {BulletPoints} from './../components/organism/BulletPoints/BulletPoints';

const About = () => {
    const { language } = useContext(LanguageContext);

    const contentBulletPoint = [{
        img: translations['en-GB'].about.bulletsSection3Image.src,
        title: translations[language].about.bulletsSection3Title,
        text:translations[language].about.bulletsSection3Description,
    }]
    
    return(
        <div>
            <BannerImage 
                size='medium'
                background={translations['en-GB'].about.src}
            >
                <AnimatedText words={translations[language].about.title} />
            </BannerImage>

            <Quote title={translations[language].about.quote} text={translations[language].about.quoteAuthor}></Quote>
            
            <Subtitle content={translations[language].about.section1Title} />
            <BannerTextImage
                imageSrc={translations['en-GB'].about.bannerSection1Image.src}
                title={translations[language].about.bannerSection1Title} 
                body={translations[language].about.bannerSection1Description} 
                link='/articles/' 
                linkPlaceholder={translations[language].about.bannerSection1Button}
                variation='light'
                textSide='right'
                cta={false}
            />

            <Subtitle content={translations[language].about.multiverseTitle} />
            <div className={styles.model3D}>
                <iframe className={styles.iframe} loading="lazy" title="VR Meeting Office | Conference Room | Baked" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0bedb56a494f4d0cb1443af6d496c4f2/embed?autostart=1&dnt=1"> </iframe> 
                <div className={`${styles.navigate} d-flex justify-content-center`}>
                    <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/street-view.png" alt="street-view"/>
                    <h5 className='my-auto ps-3'>{translations[language].about.navigate}</h5>
                </div>
            </div>
            <div className={styles.background}></div>

            <Subtitle content={translations[language].about.section2Title} />
            <Container className='mb-5'>
                <p>✨ {translations[language].about.paragraph1Section2}</p>
                <p>✨ {translations[language].about.paragraph2Section2}</p>
                <p>✨ {translations[language].about.paragraph3Section2}</p>
            </Container>

            <BannerTextImage
                imageSrc={translations['en-GB'].about.bannerSection2Image.src}
                title={translations[language].about.bannerSection2Title} 
                body={translations[language].about.bannerSection2Description} 
                link='/articles/human-relations-and-technology'
                linkPlaceholder={translations[language].about.bannerSection2Button}
                textSide='left'
                variation='light'
            />

            <Subtitle content={translations[language].about.bannerSection3Title} />
            <BulletPoints content={contentBulletPoint}/> 

            <Subtitle content={translations[language].about.section4Title} />
            <BannerTextImage
                imageSrc={translations['en-GB'].about.bannerSection4Image.src}
                title={translations[language].about.bannerSection4Title} 
                body={translations[language].about.bannerSection4Description} 
                link='/showcase' 
                linkPlaceholder={translations[language].about.bannerSection4Button}
                variation='light'
                textSide='right'
            />

            <Subtitle content={translations[language].about.section5Title} />
            <Container className='mb-5'>
                <p>✨ {translations[language].about.paragraph1Section5}</p>
                <p>✨ {translations[language].about.paragraph2Section5}</p>
                <p>✨ {translations[language].about.paragraph3Section5}</p>
            </Container>
        </div>
    )
}

export default About;