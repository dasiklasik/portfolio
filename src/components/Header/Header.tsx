import React from "react";
import styles from './Header.module.css'
import '../../App.css'

export const Header = () => {
    return (
        <header>
            <nav className={`${styles.header} wrapper`}>
                <ul>
                    <li><a href={'#main'}>Главная</a></li>
                    <li><a href={'#skills'}></a>Навыки</li>
                    <li><a href={'#works'}></a>Работы</li>
                    <li><a href={'#contscts'}></a>Контакты</li>
                </ul>
            </nav>
        </header>
    )
}