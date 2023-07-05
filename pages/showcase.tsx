import { useContext } from 'react';
import { Highlights } from '../components/organism/Highlights';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import { BannerImage } from '../components/organism/BannerImage';
import { BannerTextImage } from '../components/organism/BannerTextImage';
import { AnimatedText } from '../components/atom/AnimatedText/AnimatedText';
import { HighlightHover } from '../components/organism/HighlightHover/HighlightHover'
import { Subtitle } from '../components/atom/Subtitle/Subtitle';

const Showcase = () => {
    const { language } = useContext(LanguageContext);

    const contentHighlight = [
        {
            source: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
            title: translations[language].titleAI,
            text:translations[language].subtitleAI,
            link:'',
            delay:'0'
        },
        {
            source:'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
            title: translations[language].titleDesign,
            text:translations[language].subtitleDesign,
            link:'/',
            delay:'300'
        },
        {
            source:'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
            title: translations[language].titleGoodPractices,
            text:translations[language].subtitleGoodPractices,
            link:'/',
            delay:'600'
        }
    ]

    return(
        <div>
            <BannerImage 
                size='medium'
                background='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
            >
                <AnimatedText words={translations[language].titleGoodPractices} />
            </BannerImage>
            
            <Subtitle content={translations[language].showcase.threeSpecialties} />
            <HighlightHover content={contentHighlight}/>
            
            <Subtitle content={translations[language].showcase.detailDesign} />
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
            <Highlights content={contentHighlight}/>

            <Subtitle content={translations[language].showcase.assessYourNeeds} />
            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
                variation='light'
                textSide='left'
            />
        </div>
    )
}

export default Showcase;