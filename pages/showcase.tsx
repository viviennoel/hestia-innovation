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

    const contentExpertise = [
        {
            source: translations['en-GB'].showcase.expertise[0].src,
            title: translations[language].showcase.expertise[0].title,
            text: translations[language].showcase.expertise[0].description,
            link:'/development',
            delay:'0'
        },
        {
            source: translations['en-GB'].showcase.expertise[1].src,
            title: translations[language].showcase.expertise[1].title,
            text: translations[language].showcase.expertise[1].description,
            link:'/designs',
            delay:'300'
        },
        {
            source: translations['en-GB'].showcase.expertise[2].src,
            title: translations[language].showcase.expertise[2].title,
            text: translations[language].showcase.expertise[2].description,
            link:'/ai',
            delay:'600'
        }
    ]
    
    const contentHighlight = [
        {
            source: translations['en-GB'].showcase.highlights[0].highlightsImage.src,
            title: translations[language].showcase.highlights[0].title,
            text: translations[language].showcase.highlights[0].description,
            link:'/articles?article=automation-wide-application-for-business',
            delay:'0'
        },
        {
            source: translations['en-GB'].showcase.highlights[1].highlightsImage.src,
            title: translations[language].showcase.highlights[1].title,
            text: translations[language].showcase.highlights[1].description,
            link:'/articles?article=pixel-perfect-testing-for-big-teams',
            delay:'300'
        },
        {
            source: translations['en-GB'].showcase.highlights[2].highlightsImage.src,
            title: translations[language].showcase.highlights[2].title,
            text: translations[language].showcase.highlights[2].description,
            link:'/articles?article=agile-north-star-metric',
            delay:'600'
        }
    ]

    return(
        <div>
            <BannerImage 
                size='medium'
                background={translations['en-GB'].showcase.src}
            >
                <AnimatedText words={translations[language].showcase.title} />
            </BannerImage>
            
            <Subtitle content={translations[language].showcase.section1Title} />
            <HighlightHover content={contentExpertise}/>
            
            <Subtitle content={translations[language].showcase.section2Title} />
            <BannerTextImage
                imageSrc={translations['en-GB'].showcase.bannerSection2Image.src}
                title={translations[language].showcase.bannerSection2Title} 
                body={translations[language].showcase.bannerSection2Description} 
                link='/articles?article=situation-analysis-and-decisions'
                linkPlaceholder={translations[language].showcase.bannerSection2Button}
                variation='light'
                textSide='right'
            />
            
            <Subtitle content={translations[language].showcase.section3Title} />
            <Highlights content={contentHighlight}/>

            <Subtitle content={translations[language].showcase.section4Title} />
            <BannerTextImage
                 imageSrc={translations['en-GB'].showcase.bannerSection4Image.src}
                 title={translations[language].showcase.bannerSection4Title} 
                 body={translations[language].showcase.bannerSection4Description} 
                 link='/contact'
                 linkPlaceholder={translations[language].showcase.bannerSection4Button}
                 variation='light'
                textSide='left'
            />
        </div>
    )
}

export default Showcase;