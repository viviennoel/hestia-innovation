import Carousel from 'react-bootstrap/Carousel';
import { CarouselProps } from '../../../types/componentProps';
import Link from 'next/link';
import styles from './CarouselComponent.module.scss';

const CarouselComponent = (props:{content:CarouselProps[]}) => {
  return (
    <Carousel fade className={`${styles.carousel} mb-5`}>
    {props.content.map((item, index) =>
            <Carousel.Item className={styles.item} key={`item${index}`}>
                <Link href={item.link}>
                  <div className={styles.image}>
                    <img
                      className="d-block w-100"
                      src={item.source}
                      alt={item.alt}
                    />
                  </div>
                <Carousel.Caption className={styles.caption}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </Carousel.Caption>
                </Link>
            </Carousel.Item>
    )}
    </Carousel>
  );
}

export default CarouselComponent;