import {BannerImage} from './../../organism/BannerImage';
import {BannerTextImage} from './../../organism/BannerTextImage';
import {BulletPoints} from './../../organism/BulletPoints/BulletPoints';
import {Subtitle} from './../../atom/Subtitle/Subtitle';
import Container from 'react-bootstrap/Container';
import {AnimatedText} from './../../atom/AnimatedText/AnimatedText';
import { translations } from '../../../translations/translations';
import { useContext } from 'react';
import LanguageContext from '../../../context/languageContext';
import styles from './ArticlePage.module.scss';

export const ArticlePage = ({article}: {article:string}) => {
    const { language } = useContext(LanguageContext);
    console.log(article)
    
    return(
        <div>
            {article && <div>
                <BannerImage 
                size='medium'
                background={translations['en-GB'][article].src}
            >
                 <AnimatedText words={translations[language][article].title} />
            </BannerImage>
            {translations[language][article].paragraphs.map(paragraph => 
                <section>
                    <Container className={styles.container}>
                        <h2 className='mb-5'>{paragraph.title}</h2>
                        {paragraph.body.map((bodyPart, index) => {
                            return (
                                index === 0 ? <h3 className={styles.subtitle}>{bodyPart}</h3>
                                : <p>{bodyPart}</p>
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