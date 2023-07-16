import styles from './../styles/pages/about.module.scss';
import { Subtitle } from '../components/atom/Subtitle/Subtitle';
import { Quote } from '../components/atom/Quote/Quote';
import { translations } from '../translations/translations';
import { useContext } from 'react';
import LanguageContext from '../context/languageContext';
import { BannerImage } from '../components/organism/BannerImage';
import { AnimatedText } from '../components/atom/AnimatedText/AnimatedText';

const About = () => {
    const { language } = useContext(LanguageContext);
    
    return(
        <div className=''>
            <div className={styles.model3D}>
                <iframe className={styles.iframe} title="VR Meeting Office | Conference Room | Baked" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0bedb56a494f4d0cb1443af6d496c4f2/embed?autostart=1&dnt=1"> </iframe> 
                <AnimatedText words={translations[language].titleGoodPractices} />
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

export default About;