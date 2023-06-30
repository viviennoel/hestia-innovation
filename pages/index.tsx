import { useContext, useEffect, useState } from 'react';
import { Titles } from '../components/atom/Titles';
import { BannerHome } from '../components/organism/BannerHome';
import { Highlights } from '../components/organism/Highlights';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import {RedirectionHomepage} from './../components/organism/RedirectionHomepage'


const Index = () => {
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
            
            <Titles />
            <RedirectionHomepage />
        </div>
    )
}

export default Index;