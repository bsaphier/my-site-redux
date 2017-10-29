import React from 'react';
import SSC from 'react-ssc';
import s from '../cards.scss';
import ProjectsList from './ProjectsList.jsx';


const Projects = () => {
    return (
        <SSC.Card title={'My Projects'}>
            {() => (
                <div className={s.cContent}>
                    <div className={s.contentBlock}>
                        <ProjectsList />
                    </div>
                </div>
            )}
        </SSC.Card>
    );
};

export default Projects;
