import React from "react";
import styles from './Contacts.module.css'
import '../../App.css'

export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.block}>
            <div className={'wrapper'}>
                <h2>Darya Samsanovich</h2>
                <div className={styles.flexWrapper}>
                    <ul>
                        <li><a href='https://t.me/DaryaSams' target='_blank'>Telegram</a></li>
                        <li><a href='https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D1%81%D0%B0%D0%BC%D1%81%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-7541a5235/' target='_blank'>Linkedin</a></li>
                        <li><a href='https://github.com/dasiklasik' target='_blank'>GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}