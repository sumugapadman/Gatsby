import React from "react"
import styles from './404.module.scss';

export default () => {
    return <div className={styles.content}>
        <h1 className={styles.header}>This is a 404 Page</h1>
        <p className={styles.errorMessage}>
            The Page you are looking for does not exist.
        </p>
    </div>
}
