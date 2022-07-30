import React from "react";
import styles from './Skills.module.scss'
import '../../App.scss'
import {SkillItem} from "./SkillItem/SkillItem";
import reactImage from '../../attached/react.svg'
import htmlImage from '../../attached/html5.svg'
import cssImage from '../../attached/css3.svg'
import sassImage from '../../attached/sass.svg'
import JSImage from '../../attached/javascript.svg'
import TSImage from '../../attached/typescript.svg'
import reduxImage from  '../../attached/redux.svg'

export const Skills = () => {

    return (
        <div id={'skills'} className={styles.skills}>
            <div className={'wrapper'}>
                <h2>My skills</h2>
                <div className={styles.flexWrapper}>
                    <SkillItem data={{
                        image: htmlImage,
                        title: 'HTML5',
                        description: 'Special language used to create markup for a web application.'
                    }}/>
                    <SkillItem data={{
                        image: cssImage,
                        title: 'CSS3',
                        description: 'Language for describing the appearance of a document written using a markup language.'
                    }}/>
                    <SkillItem data={{
                        image: sassImage, title: 'Sass', description: '' +
                            'Мetalanguage required to increase the level of abstraction of CSS code and simplify ' +
                            'cascading style sheet files.'
                    }}/>
                    <SkillItem data={{
                        image: JSImage,
                        title: 'JavaScript',
                        description: 'Scripting programming language with dynamic typing that' +
                            ' defines the behavior of a web application.'
                    }}/>
                    <SkillItem data={{
                        image: TSImage,
                        title: 'TypeScript',
                        description: 'Programming language that is a web application development tool ' +
                            'that solves typing problems and extends the ' +
                            'capabilities of the JavaScript language.'
                    }}/>
                    <SkillItem data={{
                        image: reactImage,
                        title: 'React',
                        description: 'Library for developing user interfaces and creating one-page ' +
                            'applications using components and Virtual DOM.'
                    }}/>
                    <SkillItem data={{
                        image: reduxImage,
                        title: 'Redux',
                        description: 'Library for managing the state of the application using tools that ' +
                            'allow you to build the architecture of a web application and greatly simplify the ' +
                            'transfer of data.'
                    }}/>
                </div>
            </div>
        </div>
    )
}

