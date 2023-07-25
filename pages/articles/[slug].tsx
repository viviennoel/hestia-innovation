import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {ArticlePage} from '../../components/page/ArticlePage/ArticlePage';
import { translations } from "../../translations/translations";
import Error from "next/error";


export const Articles = () => {
    const router = useRouter()
    if(!translations['en-GB'].articles.slugs.includes(router.query.slug as string) && router.query.slug !== undefined){
        return <Error statusCode={404} title="page Not Found" />
    }

    return <ArticlePage article={router.query.slug as string} />
}

export default Articles;