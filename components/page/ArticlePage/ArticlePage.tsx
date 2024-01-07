import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import styles from './ArticlePage.module.scss';
import { Article } from './../../organism/Article/Article';
import { ArticleList } from './../../organism/ArticleList/ArticleList';
import { useRouter } from 'next/router';

export const ArticlePage = ({article}:{article?:string}) => {
    const [articleQuery, setArticle] = useState(undefined);
    const router = useRouter()

    useEffect(()=> {
        if(typeof window !== undefined && article === undefined){
            const urlParams = new URLSearchParams(window.location.search);
            const urlParamsArticle = urlParams.get('article');
            console.log('urlParamsArticle', urlParamsArticle)
            const { query } = router.query
            console.log(query)
            setArticle(urlParamsArticle ? urlParamsArticle : null);
        } else{
            setArticle(article);
        }
    }, [router])
    
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className={styles.wrapper}>
            { articleQuery ? <Article articleQuery={articleQuery} /> : <ArticleList />
        }
        </div>
    )
}