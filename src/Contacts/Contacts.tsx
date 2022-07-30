import React from "react";
import styles from './Contacts.module.css'
import '../App.scss'

export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.block}>
            <div className={'wrapper'}>
                <h2>Самсонович Дарья</h2>
                <div className={styles.flexWrapper}>
                    <div className={styles.contactItem}></div>
                    <div className={styles.contactItem}></div>
                    <div className={styles.contactItem}></div>
                    <div className={styles.contactItem}></div>
                </div>
            </div>
        </div>
    )
}