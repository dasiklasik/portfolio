import React from "react";

type SkillItemPropsType = {
    data: { image: string, title: string, description: string }
}
export const SkillItem = (props: SkillItemPropsType) => {

    const {
        data
    } = props

    return (
        <div>
            <img src={data.image} alt={'icon'}/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}