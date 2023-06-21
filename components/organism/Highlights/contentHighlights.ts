import { useContext } from "react";
import LanguageContext from "../../../context/languageContext";
import { translations } from "../../../translations/translations";

export const contentHighlights = () => {
    const { language } = useContext(LanguageContext);

    return(
        [
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
    )
}