import { useContext, useEffect, useState } from 'react';
import { Titles } from '../components/atom/Titles';
import { BannerHome } from '../components/organism/BannerHome';
import { Highlights } from '../components/organism/Highlights';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import {RedirectionHomepage} from './../components/organism/RedirectionHomepage'


const Index = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div>
            <BannerHome />
            <Titles />
            <RedirectionHomepage />
        </div>
    )
}

export default Index;