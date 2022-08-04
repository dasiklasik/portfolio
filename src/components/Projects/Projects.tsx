import React from "react";
import '../../App.css'
import styles from './Projects.module.css'
import {ProjectItem} from "./ProjectItem/ProjectItem";
import {ProjectsData} from "../../data/projectsData";


export const Projects = () => {
    return (
        <div id={'works'} className={styles.projects}>
            <div className={'wrapper'}>
                <h2>My works</h2>
                <div className={styles.flexWrapper}>
                    {
                        ProjectsData.map(pr => {
                            return <ProjectItem data={pr}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

