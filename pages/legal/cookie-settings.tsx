import {BannerImage} from './../../components/organism/BannerImage';
import {AnimatedText} from './../../components/atom/AnimatedText/AnimatedText';
import {Subtitle} from './../../components/atom/Subtitle/Subtitle';
import { useContext } from 'react';
import LanguageContext from '../../context/languageContext';
import { translations } from '../../translations/translations';
import Container from 'react-bootstrap/Container';

const cookieSettings = () => {
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
                {/* Privacy policy */}
                <Container className='mb-5 text-center' id='privacyPolicy'><h2>{translations[language].showcase.discoverArticles}</h2></Container>

                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
                {/* CGU */}
                <Container className='mb-5 text-center' id='cgu'><h2>{translations[language].showcase.discoverArticles}</h2></Container>

                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
                <Subtitle content={translations[language].showcase.discoverArticles} />
                <Container><p>{translations[language].showcase.discoverArticles}</p></Container>
                
            </div>
        </div>
    )
}

export default cookieSettings;