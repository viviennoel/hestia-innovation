import React, { useContext } from "react"
import LanguageContext from "../../../context/languageContext"
import { translations } from "../../../translations/translations"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import styles from "./ArticleList.module.scss"
import { useRouter } from "next/router"

export const ArticleList = () => {
    const { language } = useContext(LanguageContext);
    const router = useRouter()

    const handleOnClick = (slug:string) => {
        router.query.article = slug
        router.push(router)
    }

    return (
        <Container className={styles.container}>
            <Row xs={1} md={3} className="g-4">
            {translations['en-GB'].articles.slugs.map((slug:string)=>
                 <Col key={slug}>
                    {translations[language][slug] &&
                    <Card className={styles.card}>
                            <Card.Img variant="top" className={styles.img} src={translations[language][slug].src} />
                            <Card.Body className={styles.body}>
                                <Card.Title>{translations[language][slug].title}</Card.Title>
                                <Button variant="dark" className={styles.btn} onClick={()=> handleOnClick(slug)}>{translations[language].more}</Button>
                            </Card.Body>
                        </Card>
                    }
                 </Col>
               )}
             </Row>
        </Container>
    )
}
