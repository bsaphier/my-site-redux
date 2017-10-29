import React, { Component } from 'react';
import ProjectTitle from './ProjectTitle.jsx';
import s from './projects-list.scss';


const INIT_STATE = {
    youphonic: false,
    rrwa: false,
    ssc: false,
    details: ''
};

const projects = [
    {
        id: 'youphonic',
        name: 'Youphonic',
        url: 'http://www.youphonic.co',
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

class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.showFullDetail = this.showFullDetail.bind(this);
        this.hideFullDetail = this.hideFullDetail.bind(this);
    }

    showFullDetail(projectName) {
        const selectedProject = projects.filter(project => project.id === projectName).pop();
        this.setState(() => ({
            ...INIT_STATE,
            [projectName]: true,
            details: selectedProject.description
        }));
    }

    hideFullDetail() {
        this.setState(() => INIT_STATE);
    }

    render() {
        return [(
            <div key={'projects-titles'} className={s.pTitleWrap}>
                {
                    projects.map( project => (
                        <div key={project.id} className={s.pWrap}>
                            <ProjectTitle
                                project={project}
                                exitCallback={this.hideFullDetail}
                                enterCallback={() => this.showFullDetail(project.id)} />
                        </div>
                    ))
                }
            </div>
        ), (
            <div key={'projects-description'} className={s.pDetailWrap}>
                    <div className={this.state.details.length ? `${s.pDetail} ${s.view}` : s.pDetail}>
                        { this.state.details }
                    </div>
            </div>
        )];
    }
}

export default ProjectsList;
