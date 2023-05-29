import { DropdownMenu } from "../../atom/DropdownMenu"

import styles from './Header.module.scss'

export const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <DropdownMenu />
        </div>
    )
}