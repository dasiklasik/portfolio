import React from "react";
import styles from './HireBlock.module.css'
import '../../App.css'

export const HireBlock = () => {
    return (
        <div className={styles.block}>
            <div className={'wrapper'}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <a href={''} className={styles.link}>Нанять меня</a>
            </div>
        </div>
    )
}