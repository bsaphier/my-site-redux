import React from 'react';
import s from './skills.scss';


const skills = ['Javascript', 'EchmaScript6+', 'React', 'Webpack', 'Angular', 'Node', 'Express', 'Typescript', 'RxJs', 'Redux'];

const Skills = ({ display }) => {
    return (
        <div className={display ? `${s.show} ${s.skillsContent}` : s.skillsContent}>
            <div className={s.subTitle}>{'Some Tech I Like to Work With'}</div>
            <div className={s.skillWrap}>
                {skills.map((skill, i) => (
                    <span key={skill + (+i)} className={s.skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
