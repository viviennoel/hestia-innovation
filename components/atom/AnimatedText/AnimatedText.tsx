import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './AnimatedTitle.module.scss';

type Balise = 'h2' | 'p';

export const AnimatedText = ({words, balise}:{words:string, balise:Balise}) => {
    const speed = 100;
    const [part, setPart] = useState('');
    let offset = 0;
  
    useEffect(() => {
      const interval = setInterval(() => { 
        const newPart = words.substr(0, offset);
        if (offset <= words.length) {
            setPart(newPart);
            offset++;
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [words]);
  
    return (
      <Container>
        <h1 className={`pt-4 ${styles.animatedTitle}`}>
            {part}
        </h1>
      </Container>
    )
}