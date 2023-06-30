import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

type Balise = 'h2' | 'p';

export const AnimatedText = ({words, balise}:{words:string, balise:Balise}) => {
    const speed = 70;
    const [part, setPart] = useState('');
    let offset = 0;
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const interval = setInterval(() => { 
        const newPart = words.substr(0, offset);
        console.log('offset', offset, words, newPart)
        if (offset <= words.length) {
            setPart(newPart);
            offset++;
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const containerOpacity = containerRef.current?.style.opacity;
      console.log('Container opacity:', containerOpacity);
      if (containerOpacity === '0.5') {
        offset = 0;
      }
    }, [containerRef.current?.style.opacity]);
  
  
    return (
      <Container
      ref={containerRef}
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay='0'
        data-aos-duration="1000"
      >
        <h2 className={`word pt-4`}>
            {part}
        </h2>
      </Container>
    )
}