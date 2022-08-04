import React from "react";
import styles from './Main.module.css'
import '../../App.css'

export const Main = () => {
    return (
        <div id={'main'} className={styles.main}>
            <div className={`${styles.content} wrapper`}>
                <div className={styles.info}>
                    <h1>Hello, I'm <span>Darya!</span></h1>
                    <p>I am front-end developer.</p>
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}