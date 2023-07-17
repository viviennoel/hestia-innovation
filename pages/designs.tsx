import { BannerDesign } from "../components/organism/BannerDesign";
import { Subtitle } from "../components/atom/Subtitle/Subtitle";
import { translations } from "../translations/translations";
import { useContext } from "react";
import LanguageContext from "../context/languageContext";
import styles from './../styles/pages/designs.module.scss';
import Container from 'react-bootstrap/Container';
import { Highlights } from '../components/organism/Highlights';
import {BannerTextImage} from '../components/organism/BannerTextImage';
import {Quote} from '../components/atom/Quote/Quote';
import {BulletPoints} from '../components/organism/BulletPoints/BulletPoints';

const Designs = () => {
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
}]

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <BannerDesign />
        <Container>
          <h2 className={styles.title}>{translations[language].more}</h2>
        </Container>
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

        <Quote title={translations[language].quote.development.title} text={translations[language].quote.development.author}></Quote>

        <BannerTextImage
            imageSrc='https://res.cloudinary.com/djlwtz7qw/image/upload/v1684920923/cld-sample-2.jpg'
            title={translations[language].HomePresentation.title} 
            body={translations[language].HomePresentation.body} 
            link={translations[language].HomePresentation.link} 
            linkPlaceholder={translations[language].HomePresentation.linkPlaceholder}
            variation='light'
            textSide='left'
        />

        <Subtitle content={translations[language].showcase.discoverArticles} />
        <BulletPoints content={contentBulletPoint}/> 
      </div>
    </>
  );
};

export default Designs;