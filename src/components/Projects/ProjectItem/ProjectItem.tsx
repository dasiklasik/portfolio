import React from "react";
import styles from './ProjectItem.module.css'

type ProjectItemPropsType = {
    data: {image: string, title: string, description: string, link: string}
}

export const ProjectItem = (props: ProjectItemPropsType) => {

    const {
        data
    } = props

    return (
        <div className={styles.item}>
            <div className={styles.imageWrapper}></div>
            <h3>{data.title}</h3>
            <p className={styles.description}>{data.description}</p>
            <a className={styles.link} href={data.link}>Посмотреть</a>
        </div>
    )
}