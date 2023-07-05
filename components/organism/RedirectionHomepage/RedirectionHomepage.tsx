import {ButtonCustom} from './../../atom/Button';
import styles from './RedirectionHomepage.module.scss';
import Link from 'next/link';

export const RedirectionHomepage = () => {
    return(
        <div className={styles.RedirectionWrapper}>
            <div className='mb-3'>
                <ButtonCustom variation='dark'><Link href='/showcase'>Discover Hestia</Link></ButtonCustom>
            </div>
            <div>
                <ButtonCustom variation='dark'><Link href='/contact'>Assess your project</Link></ButtonCustom>
            </div>
        </div>
    )
}