import React from 'react';
import s from './project-title.scss';


const handleClick = ($event) => {
    window.open($event.target.href); // TODO: is it safe to open up a new tab this way?
    $event.preventDefault();
    $event.stopPropagation();
};

const ProjectTitle = ({ project, exitCallback, enterCallback }) => {
    return (
        <a
            className={s.pLink}
            onClick={handleClick}
            onMouseLeave={exitCallback}
            onMouseEnter={enterCallback}
            href={project.url}>
            {project.name}
        </a>
    );
};

export default ProjectTitle;
