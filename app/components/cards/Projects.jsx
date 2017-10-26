import React from 'react';
import SSC from 'react-ssc';
import s from './cards.scss';


const handleClick = ($event) => {
    window.open($event.target.href);
    $event.preventDefault();
    $event.stopPropagation();
};

const Projects = () => {
    return (
        <SSC.Card title={'My Projects'}>
            {(clicked) => (
                <div className={clicked ? `${s.clicked} ${s.cContent}` : s.cContent}>
                    <span>{'Projects...'}</span>
                </div>
            )}
        </SSC.Card>
    );
};

export default Projects;
