import styles from './Button.module.scss'
import { ButtonProps } from '../../../types/componentProps';
import Button from 'react-bootstrap/Button';

export const ButtonCustom = ({variation, children}:ButtonProps) => {
    const styleBtn = variation === 'clear' ? styles.clearBtn : styles.darkBtn;
    return <Button className={styleBtn}>{children}</Button>
}