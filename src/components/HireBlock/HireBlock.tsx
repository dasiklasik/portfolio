import React from "react";
import styles from './HireBlock.module.css'
import '../../App.css'

export const HireBlock = () => {
    return (
        <div className={styles.block}>
            <div className={'wrapper'}>
                <h2>I'm considering remote work options</h2>
                <a href='https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D1%81%D0%B0%D0%BC%D1%81%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-7541a5235/'
                   className={styles.link}
                   target={'_blank'}
                >Hire me</a>
            </div>
        </div>
    )
}