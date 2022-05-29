import React from "react";
import styles from './Main.module.css'
import '../../App.css'

export const Main = () => {
    return (
        <div id={'main'} className={styles.main}>
            <div className={`${styles.content} wrapper`}>
                <div className={styles.info}>
                    <p>Привет!</p>
                    <p>Меня зовут Дарья Самсонович.</p>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}