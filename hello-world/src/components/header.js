import React from 'react'
import {Link} from 'gatsby'
import styles from './header.module.scss'

export default () => {
    return <header className={styles.container}>
        <div className={styles.row}>
            <Link to="/">My Gatsby Blog</Link>
        </div>
    </header>
}