import styles from './Titles.module.scss'
import React, { useEffect, useState } from 'react';

export const Titles = () => {
  const words = [
    'Hi i like HTML',
    'I also like css',
    'Lorem ipsum dolor sit amet',
    ' consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt',
  ];
  const speed = 70;
  const skip_delay = 15;
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
    }, []);
  
    return <div className={`word ${styles.titleWrapper}`}><span className={styles.transparent}>.</span>{part}</div>;
  };