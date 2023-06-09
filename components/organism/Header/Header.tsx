import { DropdownMenu } from "../../atom/DropdownMenu"

import styles from './Header.module.scss';
import { useContext, useState } from "react";
import LanguageContext from "../../../context/languageContext";

export const Header = () => {
    const [dataState, setDataState] = useState('isLoading');
    const { language, setLanguage } = useContext(LanguageContext);

    return(
        <div className={styles.headerWrapper}>
            <DropdownMenu />
            <button onClick={()=>setLanguage('en-gb')}>Change {language}</button>
        </div>
    )
}