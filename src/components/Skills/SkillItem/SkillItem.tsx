import React from "react";
import styles from './SkillItem.module.css'

type SkillItemPropsType = {
    data: { image: string, title: string, description: string }
}
export const SkillItem = (props: SkillItemPropsType) => {

    const {
        data
    } = props

    return (
        <div className={styles.item}>
            <img src={data.image} alt={'icon'} className={styles.icon}/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}