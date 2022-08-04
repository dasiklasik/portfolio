import React from "react";
import '../../App.css'
import styles from './Projects.module.css'
import {ProjectItem} from "./ProjectItem/ProjectItem";

export const Projects = () => {
    return (
        <div id={'works'} className={styles.projects}>
            <div className={'wrapper'}>
                <h2>Мои работы</h2>
                <div className={styles.flexWrapper}>
                    <ProjectItem data={{image: '', title: 'project', description: 'description', link: ''}}/>
                    <ProjectItem data={{image: '', title: 'project', description: 'description', link: ''}}/>
                </div>
            </div>
        </div>
    )
}

