import { BannerImageProps, BannerImageSize } from "../../../types/componentProps"
import styles from './BannerImage.module.scss'

export const BannerImage = ({size, background}:BannerImageProps) => {
    return(
        <div className={`${getBannerStyle(size)} ${styles.banner}`} style={{backgroundImage:`url(${background})`}}>
        </div>
    )
}

const getBannerStyle = (size:BannerImageSize) => {
    console.log(size)
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