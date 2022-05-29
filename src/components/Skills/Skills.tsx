import React from "react";
import styles from './Skills.module.css'
import {SkillItem} from "./SkillItem";

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <h2>Мои навыки</h2>
            <SkillItem data={{image: '', title: 'React', description: 'description'}}/>
        </div>
    )
}

