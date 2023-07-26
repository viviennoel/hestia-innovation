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
        source: translations['en-GB'].designs.highlights[0].highlightsImage.src,
        title: translations[language].designs.highlights[0].title,
        text: translations[language].designs.highlights[0].description,
        link:'/articles/why-Data-Driven-Development-is-a-game-changer',
        delay:'0'
    },
    {
        source: translations['en-GB'].designs.highlights[1].highlightsImage.src,
        title: translations[language].designs.highlights[1].title,
        text: translations[language].designs.highlights[1].description,
        link:'/articles/green-it-opportunity-and-accessibility',
        delay:'300'
    },
    {
        source: translations['en-GB'].designs.highlights[2].highlightsImage.src,
        title: translations[language].designs.highlights[2].title,
        text: translations[language].designs.highlights[2].description,
        link:'/articles/modeling-3D-immersive',
        delay:'600'
    }
  ]

  const contentBulletPoint = [{
    img: translations['en-GB'].designs.bullets[0].bulletsImage.src,
    title: translations[language].designs.bullets[0].title,
    text:translations[language].designs.bullets[0].description,
},
{
    img: translations['en-GB'].designs.bullets[1].bulletsImage.src,
    title: translations[language].designs.bullets[1].title,
    text:translations[language].designs.bullets[1].description,
},
{
    img: translations['en-GB'].designs.bullets[2].bulletsImage.src,
    title: translations[language].designs.bullets[2].title,
    text:translations[language].designs.bullets[2].description,
}]

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <BannerDesign />
        <Container>
          <h2 className={styles.title}>{translations[language].designs.title}</h2>
        </Container>
        <Highlights content={contentHighlight}/>

        <Subtitle content={translations[language].designs.section2Title} />
        <BannerTextImage
            imageSrc={translations['en-GB'].designs.bannerSection2Image.src} 
            title={translations[language].designs.bannerSection2Title} 
            body={translations[language].designs.bannerSection2Description} 
            link='/articles/modeling-3D-immersive'
            linkPlaceholder={translations[language].designs.bannerSection2Button}
            variation='light'
            textSide='right'
        />

        <Quote title={translations[language].designs.quote} text={translations[language].designs.quoteAuthor}></Quote>

        <BannerTextImage
            imageSrc={translations['en-GB'].designs.bannerSection3Image.src} 
            title={translations[language].designs.bannerSection3Title} 
            body={translations[language].designs.bannerSection3Description} 
            link='https://www.cypress.io/app/'
            linkPlaceholder={translations[language].designs.bannerSection3Button}
            variation='light'
            textSide='left'
        />

        <Subtitle content={translations[language].designs.section4Title} />
        <BulletPoints content={contentBulletPoint}/> 
      </div>
    </>
  );
};

export default Designs;