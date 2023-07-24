import { useRouter } from "next/router";
import {ArticlePage} from '../../components/page/ArticlePage/ArticlePage';

export const Articles = () => {
    console.log('router')
    const router = useRouter()
    return <ArticlePage article={router.query.slug as string} />
}

export default Articles;