
import React, { useEffect, useState } from 'react';

type Balise = 'h2' | 'p';

export const AnimatedText = ({words, balise}:{words:string, balise:Balise}) => {
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
  
    switch(balise){
        case('h2'):
            return (
                <h2 className={`word`}>
                    {part}
                </h2>
            )
        case('p'):
            return (
                <p className={`word`}>
                    {part}
                </p>
            )
    }
}