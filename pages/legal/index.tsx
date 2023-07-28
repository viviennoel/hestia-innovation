import { useContext } from 'react';
import LanguageContext from '../../context/languageContext';
import { ArticlePage } from './../../components/page/ArticlePage/ArticlePage';

const Legal = () => {
    const { language } = useContext(LanguageContext);

    return <ArticlePage article='legal' />
}

export default Legal;