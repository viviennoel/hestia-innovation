import { useContext } from 'react';
import { BannerHome } from '../components/organism/BannerHome';
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
        img: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
        title: translations[language].titleAI,
        text:translations[language].subtitleAI,
    },
    {
        img: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
        title: 'translations[language].titleAI',
        text:translations[language].subtitleAI,
    },
    {
        img: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
        title: translations[language].titleAI,
        text:translations[language].subtitleAI,
    },
    {
        img: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
        title: 'translations[language].titleAI',
        text:translations[language].subtitleAI,
    }]

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

    const contentCarousel = [
        {
            source: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
            alt: 'string',
            link: '/string',
            title: 'string',
            text: 'string'
        },
        {
            source: 'https://res.cloudinary.com/djlwtz7qw/image/upload/v1615571569/samples/animals/reindeer.jpg',
            alt: 'string',
            link: '/string1',
            title: 'string1',
            text: 'string1'
        },
    ]

    return(
        <div>
            <BannerImage 
                size='medium'
                background='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
            >
                <AnimatedText words={translations[language].titleGoodPractices} />
            </BannerImage>
            <Quote title={translations[language].quote.development.title} text={translations[language].quote.development.author}></Quote>
            
            <Subtitle content={translations[language].showcase.discoverArticles} />
            <Highlights content={contentHighlight}/>
            
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
            <BulletPoints content={contentBulletPoint}/> 

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <CarouselComponent content={contentCarousel}></CarouselComponent> 

            <Subtitle content={translations[language].showcase.discoverArticles} />
            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
            />
        </div>
    )
}

export default Index;