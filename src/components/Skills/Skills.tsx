import React from "react";
import styles from './Skills.module.css'
import '../../App.css'
import {SkillItem} from "./SkillItem/SkillItem";
import reactImage from '../../attached/react.svg'

export const Skills = () => {
    return (
        <div className={styles.skills}>
           <div className={'wrapper'}>
               <h2>Мои навыки</h2>
               <div className={styles.flexWrapper}>
                   <SkillItem data={{image: reactImage, title: 'React', description: 'description'}}/>
                   <SkillItem data={{image: reactImage, title: 'React', description: 'description'}}/>
                   <SkillItem data={{image: reactImage, title: 'React', description: 'description'}}/>
               </div>
           </div>
        </div>
    )
}

