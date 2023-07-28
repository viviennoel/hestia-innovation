import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {ArticlePage} from '../../components/page/ArticlePage/ArticlePage';
import { translations } from "../../translations/translations";
import Error from "next/error";


export const Articles = () => {
    return <ArticlePage  />
}

export default Articles;