import {ButtonCustom} from './../../atom/Button';
import styles from './RedirectionHomepage.module.scss';

export const RedirectionHomepage = () => {
    return(
        <div className={styles.RedirectionWrapper}>
            <div className='mb-3'>
                <ButtonCustom variation='dark'>Discover Hestia</ButtonCustom>
            </div>
            <div>
                <ButtonCustom variation='clear'>Assess your project</ButtonCustom>
            </div>
        </div>
    )
}