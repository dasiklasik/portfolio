import React from "react";
import styles from './Contacts.module.css'
import '../App.css'

export const Contacts = () => {
    return (
        <div className={styles.block}>
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