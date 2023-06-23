import styles from './Titles.module.scss'
import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../context/languageContext';
import { translations } from '../../../translations/translations';

export const Titles = () => {
  const { language } = useContext(LanguageContext);
  const [words, setWords] = useState<string[]>();
  
  useEffect(() => {
    setWords([
    translations[language].home.titleWord1,
    translations[language].home.titleWord2,
    translations[language].home.titleWord3,
    translations[language].home.titleWord4,
  ]);
}, [language]);

  const speed = 70;
  const skip_delay = 25;
    const [part, setPart] = useState('');
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skip_count = 0;
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= words.length) {
              i = 0;
            }
          }
        }
        const newPart = words[i].substr(0, offset);
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        setPart(newPart);
      }, speed);
  
      return () => clearInterval(interval);
    }, [words]);
  
    return <>
        <h2 className={styles.titlePresentation}>{translations[language].home.titlePresentation}</h2>
        <div className={`word ${styles.titleWrapper}`}>
          <span className={styles.transparent}>.</span>{part}
        </div>
      </>
  };