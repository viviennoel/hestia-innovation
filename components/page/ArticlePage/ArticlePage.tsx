import {BannerImage} from './../../organism/BannerImage';
import {BannerTextImage} from './../../organism/BannerTextImage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Subtitle} from './../../atom/Subtitle/Subtitle';
import Container from 'react-bootstrap/Container';
import {AnimatedText} from './../../atom/AnimatedText/AnimatedText';
import { translations } from '../../../translations/translations';
import { useContext, useEffect } from 'react';
import LanguageContext from '../../../context/languageContext';
import styles from './ArticlePage.module.scss';

export const ArticlePage = ({article}: {article:string}) => {
    const { language } = useContext(LanguageContext);
    console.log(translations[language][article])
    
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className={styles.wrapper}>
            {article && <div>
                <BannerImage 
                size='medium'
                background={translations['en-GB'][article].src}
            >
                 <AnimatedText words={translations[language][article].title} />
            </BannerImage>
            {translations[language][article].paragraphs.map(paragraph => 
                <section key={paragraph.title}>
                    <Container className={styles.container}>
                        <h2 className='mb-5' data-aos="fade"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-duration="1000" data-aos-delay="300">{paragraph.title}</h2>
                        {paragraph.body.map((bodyPart, index) => {
                            return (
                                bodyPart.split('ubtitle: ').length > 1 ? 
                                    <h3 className={styles.subtitle} key={index}  data-aos="fade"
                                        data-aos-anchor-placement="top-bottom"
                                        data-aos-duration="1000" data-aos-delay="300"
                                    >
                                        {bodyPart.split('Subtitle: ')[1]}
                                    </h3>
                                : <p key={index}>
                                    {bodyPart}
                                </p>
                            )
                        })}
                        {paragraph.img && <img src={paragraph.img.src} alt={paragraph.img.src} className={`${styles.image} mx-auto`}></img>}
                    </Container>
                </section>)
            }
            <Subtitle content={translations[language].articles.contact} />
            <BannerTextImage
                imageSrc={translations['en-GB'].articles.contactSrc}
                title={translations[language].articles.contactTitle} 
                body={translations[language].articles.contactDescription} 
                link='/contact'
                linkPlaceholder={translations[language].articles.contactLink}
                variation='light'
                textSide='right'
            />
            </div>
        }
        </div>
    )
}