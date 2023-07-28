import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {ArticlePage} from '../../components/page/ArticlePage/ArticlePage';
import { translations } from "../../translations/translations";
import Error from "next/error";


export const Articles = () => {
    const router = useRouter()

    console.log(router.query.slug);
    return <ArticlePage article={router.query.slug as string} />
}

export default Articles;