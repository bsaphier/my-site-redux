import React from 'react';
import PropTypes from 'prop-types';
import s from './project-title.scss';
import Link from '../../Link';

function ProjectTitle({ project, exitCallback, enterCallback }) {
  return (
    <Link
      className={s.pLink}
      onMouseLeave={exitCallback}
      onMouseEnter={enterCallback}
      href={project.url}
    >
      {project.name}
    </Link>
  );
}

ProjectTitle.propTypes = {
  project: PropTypes.object,
  exitCallback: PropTypes.func,
  enterCallback: PropTypes.func
};

export default ProjectTitle;
