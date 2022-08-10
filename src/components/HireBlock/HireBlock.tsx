import React from "react";
import styles from './HireBlock.module.css'
import '../../App.css'

export const HireBlock = () => {
    return (
        <div className={styles.block}>
            <div className={'wrapper'}>
                <h2>I'm considering remote work options</h2>
                <a href={''} className={styles.link}>Hire me</a>
            </div>
        </div>
    )
}