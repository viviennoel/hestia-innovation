import { BannerImageProps, BannerImageSize } from "../../../types/componentProps"
import styles from './BannerImage.module.scss'

export const BannerImage = ({size, background, children}:BannerImageProps) => {
    return(
        <div className={`${getBannerStyle(size)} ${styles.banner} mb-5`} style={{backgroundImage:`url(${background})`}}
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            {children}
        </div>
    )
}

const getBannerStyle = (size:BannerImageSize) => {
    switch(size){
        case('small'):
            return styles.smallBanner;
        case('medium'):
            return styles.mediumBanner;
        case('large'):
            return styles.largeBanner;
        default:
            return styles.largeBanner;
    }
}