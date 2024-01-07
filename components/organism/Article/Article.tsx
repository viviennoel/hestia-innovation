import React, { useContext } from "react"
import { Container } from "react-bootstrap"
import LanguageContext from "../../../context/languageContext"
import { translations } from "../../../translations/translations"
import { AnimatedText } from "../../atom/AnimatedText/AnimatedText"
import { Subtitle } from "../../atom/Subtitle/Subtitle"
import { BannerImage } from "../BannerImage/BannerImage"
import { BannerTextImage } from "../BannerTextImage"
import { ContactFixed } from "../ContactFixed/ContactFixed"
import styles from './Article.module.scss';

export const Article = ({articleQuery}) => {
    const { language } = useContext(LanguageContext);

    return(<div>
    <BannerImage 
        size='medium'
        background={translations['en-GB'][articleQuery].src}
    >
        <AnimatedText words={translations[language][articleQuery].title} />
    </BannerImage>
    {translations[language][articleQuery].paragraphs.map(paragraph => 
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
                        : <p key={index} dangerouslySetInnerHTML={{ __html: bodyPart }} />
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
    <ContactFixed />
    </div>)
}
