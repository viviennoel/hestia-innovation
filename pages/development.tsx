import { useContext } from 'react';
import { Highlights } from '../components/organism/Highlights';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import { BannerImage } from '../components/organism/BannerImage';
import { BannerTextImage } from '../components/organism/BannerTextImage';
import { Quote } from '../components/atom/Quote/Quote';
import { AnimatedText } from '../components/atom/AnimatedText/AnimatedText';
import { Subtitle } from '../components/atom/Subtitle/Subtitle';
import CarouselComponent from '../components/organism/Carousel/CarouselComponent';
import {BulletPoints} from '../components/organism/BulletPoints/BulletPoints';

const Index = () => {
    const { language } = useContext(LanguageContext);

    const contentBulletPoint = [{
        img: translations['en-GB'].development.bullets[0].bulletsImage.src,
        title: translations[language].development.bullets[0].title,
        text: translations[language].development.bullets[0].description,
    },
    {
        img: translations['en-GB'].development.bullets[1].bulletsImage.src,
        title: translations[language].development.bullets[1].title,
        text: translations[language].development.bullets[1].description,
    },
    {
        img: translations['en-GB'].development.bullets[2].bulletsImage.src,
        title: translations[language].development.bullets[2].title,
        text: translations[language].development.bullets[2].description,
    },
    {
        img: translations['en-GB'].development.bullets[3].bulletsImage.src,
        title: translations[language].development.bullets[3].title,
        text: translations[language].development.bullets[3].description,
    },
    {
        img: translations['en-GB'].development.bullets[4].bulletsImage.src,
        title: translations[language].development.bullets[4].title,
        text: translations[language].development.bullets[4].description,
    }]

    const contentHighlight = [
        {
            source: translations['en-GB'].development.highlights[0].highlightImage.src,
            title: translations[language].development.highlights[0].title,
            text:translations[language].development.highlights[0].description,
            alt: translations[language].development.highlights[0].highlightImage.alt,
            link:'',
            delay:'0'
        },
        {
            source: translations['en-GB'].development.highlights[1].highlightImage.src,
            title: translations[language].development.highlights[1].title,
            text:translations[language].development.highlights[1].description,
            alt: translations[language].development.highlights[1].highlightImage.alt,
            link:'/',
            delay:'300'
        },
        {
            source: translations['en-GB'].development.highlights[2].highlightImage.src,
            title: translations[language].development.highlights[2].title,
            text:translations[language].development.highlights[2].description,
            alt: translations[language].development.highlights[2].highlightImage.alt,
            link:'/',
            delay:'600'
        }
    ]

    const contentCarousel = [
        {
            source: translations['en-GB'].development.articlesCarousel[0].carouselImage.src,
            alt: translations[language].development.articlesCarousel[0].carouselImage.alt,
            link: '/articles/why-Data-Driven-Development-is-a-game-changer',
            title: translations[language].development.articlesCarousel[0].title,
            text: translations[language].development.articlesCarousel[0].description
        },
        {            
            source: translations['en-GB'].development.articlesCarousel[1].carouselImage.src,
            alt: translations[language].development.articlesCarousel[1].carouselImage.alt,
            link: '/articles/cisa-cyber-essentials',
            title: translations[language].development.articlesCarousel[1].title,
            text: translations[language].development.articlesCarousel[1].description
        },
        {
            source: translations['en-GB'].development.articlesCarousel[2].carouselImage.src,
            alt: translations[language].development.articlesCarousel[2].carouselImage.alt,
            link: '/articles/what-is-automation',
            title: translations[language].development.articlesCarousel[2].title,
            text: translations[language].development.articlesCarousel[2].description
        }
    ]

    return(
        <div>
            <BannerImage 
                size='medium'
                background={translations['en-GB'].development.src}
            >
                <AnimatedText words={translations[language].development.title} />
            </BannerImage>
            <Quote title={translations[language].development.quote} text={translations[language].development.quoteAuthor}></Quote>
            
            <Subtitle content={translations[language].development.section1Title} />
            <Highlights content={contentHighlight} cta={false}/>
            
            <Subtitle content={translations[language].development.section2Title} />
            <BannerTextImage
                imageSrc={translations['en-GB'].development.bannerSection2Image.src}
                title={translations[language].development.bannerSection2Title} 
                body={translations[language].development.bannerSection2Description} 
                link='/articles/technology-real-opportunity-for-business'
                linkPlaceholder={translations[language].development.bannerSection2Button}
                variation='light'
                textSide='right'
            />

            <Subtitle content={translations[language].development.section3Title} />
            <BulletPoints content={contentBulletPoint}/> 

            <Subtitle content={translations[language].development.section4Title} />
            <CarouselComponent content={contentCarousel}></CarouselComponent> 

            <Subtitle content={translations[language].development.section5Title} />
            <BannerTextImage
                imageSrc={translations['en-GB'].development.bannerSection5Image.src}
                title={translations[language].development.bannerSection5Title} 
                body={translations[language].development.bannerSection5Description} 
                link='/contact'
                linkPlaceholder={translations[language].development.bannerSection5Button}
            />
        </div>
    )
}

export default Index;