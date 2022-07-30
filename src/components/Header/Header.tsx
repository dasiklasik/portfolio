import React from "react";
import styles from './Header.module.scss'
import '../../App.scss'

export const Header = () => {
    return (
        <header>
            <nav className={`${styles.header} wrapper`}>
                <ul>
                    <li><a href={'#main'}>Main</a></li>
                    <li><a href={'#skills'}>Skills</a></li>
                    <li><a href={'#works'}>Works</a></li>
                    <li><a href={'#contacts'}>Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}