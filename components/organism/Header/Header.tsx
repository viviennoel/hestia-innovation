import { DropdownMenu } from "../../atom/DropdownMenu"

import styles from './Header.module.scss';
import { createClient } from "./../../../prismicio";
import { SetStateAction, useContext, useEffect, useState } from "react";
import LanguageContext from "../../../context/languageContext";
import { HeaderDocument } from "../../../prismicio-types";

export const Header = () => {
    const [dataState, setDataState] = useState('isLoading');
    const { language, setLanguage } = useContext(LanguageContext);
    
    useEffect(()=> {
        const getHeaderData = async () => {
            const client = createClient();
            const data:any = await client.getSingle('header', {lang: language})
            setDataState(data);
        }
        
        if(dataState === 'isLoading') {
            getHeaderData()
        }

    }, [dataState])

    console.log(dataState)

    return(
        <div className={styles.headerWrapper}>
            <DropdownMenu />
            <button onClick={()=>setLanguage('en-gb')}>Change {language}</button>
        </div>
    )
}