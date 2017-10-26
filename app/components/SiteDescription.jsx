import React from 'react';
import SSC from 'react-ssc';
import s from './site-description.scss';


const siteDesc = `The core of this website is built with React & Redux. The design is my original work but inspired by Google's Material Design. To implement the design, I built a small UI library of React components called react-ssc. The interactive audio (for an example, hover your cursor over the welcome message) is managed by another library I wrote: react-redux-webaudio. Both libraries are available as open-source projects on Github and NPM. In addition to React & Redux, these are some other useful libraries/tools I used to build this site: React-Motion, Webpack, and of course, Babel.`;

const handleClick = ($event) => {
    $event.stopPropagation();
    $event.preventDefault();
    window.open($event.target.href);
};

const SiteDescription = () => {
    return (
        <SSC.Cell style={{ marginTop: 0 }}>
            <SSC.Title>{'Welcome to my website!'}</SSC.Title>
                <p className={s.content}>
                    The core of this website is built with
                    <a className={s.inlineLink} onClick={handleClick} href="https://reactjs.org/"> React</a> &
                    <a className={s.inlineLink} onClick={handleClick} href="http://redux.js.org/"> Redux</a>.
                    The design is my original work but inspired by Google's
                    <a className={s.inlineLink} onClick={handleClick} href="https://material.io/"> Material Design</a>.
                    To implement the design, I built a small UI
                    <a className={s.inlineLink} onClick={handleClick} href="https://bsaphier.github.io/simple-site-components/"> library of React components</a>.
                    The interactive audio (for an example, hover your cursor over the welcome message) is managed by
                    <a className={s.inlineLink} onClick={handleClick} href="https://bsaphier.github.io/react-redux-webaudio/"> react-redux-webaudio</a>.
                    Some other useful libraries/tools that I used to build this site were
                    <a className={s.inlineLink} onClick={handleClick} href="https://github.com/chenglou/react-motion"> React-Motion</a>,
                    <a className={s.inlineLink} onClick={handleClick} href="https://webpack.js.org/"> Webpack</a>, and of course,
                    <a className={s.inlineLink} onClick={handleClick} href="https://babeljs.io/"> Babel</a>.
                </p>
        </SSC.Cell>
    );
};

export default SiteDescription;
