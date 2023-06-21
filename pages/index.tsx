import { useContext, useEffect, useState } from 'react';
import { BannerHome } from '../components/organism/BannerHome';
import { Highlights } from '../components/organism/Highlights';
import { contentHighlights } from '../components/organism/Highlights/contentHighlights';
import LanguageContext from '../context/languageContext';
import { translations } from '../translations/translations';
import { BannerImage } from './../components/organism/BannerImage';
import { BannerTextImage } from './../components/organism/BannerTextImage';


const Index = () => {
    const [language, setLanguage] = useState("fr-FR");
    
    useEffect(() => {
      const localLanguage = window.localStorage.getItem("language");
      setLanguage(localLanguage);
    }, [language]);

    return(
        <div>
            <BannerHome />
            <Highlights content={contentHighlights()}/>
            <BannerTextImage
                imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
                title={translations[language].HomePresentation.title} 
                body={translations[language].HomePresentation.body} 
                link={translations[language].HomePresentation.link} 
                linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
                variation='light'
                textSide='right'
            />
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