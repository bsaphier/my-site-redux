import React, { useState } from 'react';
import ProjectTitle from './ProjectTitle';
import s from './projects-list.scss';

const initialState = {
  youphonic: false,
  rrwa: false,
  ssc: false,
  details: ''
};

const projects = [
  {
    id: 'youphonic',
    name: 'Youphonic',
    url: 'http://www.youphonic.net',
    description: 'An interactive playground exploring a different way of making music.'
  }, {
    id: 'rrwa',
    name: 'React Redux Web Audio',
    url: 'https://bsaphier.github.io/react-redux-webaudio/',
    description: 'The Web Audio API, thinly wrapped for easy integration with React-Redux.'
  }, {
    id: 'ssc',
    name: 'React-SSC',
    url: 'https://bsaphier.github.io/simple-site-components/',
    description: 'A collection of React components for bootstrapping the design of a website.'
  }
];

function ProjectsList() {
  const [state, setState] = useState(initialState);

  function showFullDetail(projectName) {
    const selectedProject = projects.filter(project => project.id === projectName).pop();
    setState({
      ...initialState,
      [projectName]: true,
      details: selectedProject.description
    });
  }

  function hideFullDetail() {
    setState({ ...initialState });
  }

  return (
    <React.Fragment>
      <div key={'projects-titles'} className={s.pTitleWrap}>
        {projects.map(project => (
          <div key={project.id} className={s.pWrap}>
            <ProjectTitle
              project={project}
              exitCallback={hideFullDetail}
              enterCallback={() => showFullDetail(project.id)}
            />
          </div>
        ))}
      </div>
      <div key={'projects-description'} className={s.pDetailWrap}>
        <div className={state.details.length ? `${s.pDetail} ${s.view}` : s.pDetail}>
          {state.details}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectsList;
