import styles from './Titles.module.scss'

export const Titles = (animateTitle=true) => {
    return(
        <div className={`${styles.titleWrapper} ${animateTitle && styles.animateTitle}`}>
          <h1 className={styles.title}>Hestia Innovation</h1>
          <h2 className={styles.subtitle}>Webmasters</h2>
        </div>
    )
}