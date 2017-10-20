import React from 'react';
import SSC from 'react-ssc';
import s from './cards.scss';


const skills = ['React', 'Angular', 'Node', 'Express'];

const SKills = () => {
    return (
        <SSC.Card title={`Stuff I Like To Work With`}>
            {(clicked) => (
                <div className={clicked ? `${s.clicked} ${s.cContent}` : s.cContent}>
                    <div className={s.skillWrap}>
                        {skills.map((skill, i) => (
                            <span key={skill + (+i)} className={clicked ? `${s.clicked} ${s.skill}` : s.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </SSC.Card>
    );
};

export default SKills;
