import React from "react";
import styles from './ProjectItem.module.css'

type ProjectItemPropsType = {
    data: {image: string, title: string, description: string, link: string, technologies: string[]}
}

export const ProjectItem = (props: ProjectItemPropsType) => {

    const {
        data
    } = props

    return (
        <div className={styles.item} style={{backgroundImage: 'url(' + data.image + ')',}}>
           <div className={styles.itemInfo}>
               <h3>{data.title}</h3>
               <p className={styles.description}>{data.description}</p>
               <a className={styles.link} href={data.link}>Show more</a>
           </div>
            <a href={data.link} className={styles.transparentLink}></a>
        </div>
    )
}