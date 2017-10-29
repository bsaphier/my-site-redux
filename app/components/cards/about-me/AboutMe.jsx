import React from 'react';
import SSC from 'react-ssc';
import s from '../cards.scss';
import Skills from './Skills.jsx';


const socialMedia = [
    {
        name: 'Github',
        url: 'https://www.github.com/bsaphier'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bsaphier'
    },
    {
        name: 'Email',
        url: 'mailto:b.saphier@gmail.com'
    }
];

const aboutMeBrief = `I am a developer that does stuff n things....`;
const aboutMeLong = `I am a developer with an eye for design and an ear for music. Blah blah I began my career as an audio engineer blah turned software engineer blah blah blah blah....`;

const handleClick = ($event) => {
    window.open($event.target.href); // TODO: is it safe to open up a new tab this way?
    $event.preventDefault();
    $event.stopPropagation();
};

const AboutMe = () => {
    return (
        <SSC.Card title={'About Me'} expandable>
            {(clicked) => (
                <div className={clicked ? `${s.clicked} ${s.cContent}` : s.cContent}>
                    <div className={s.contentBlock}>{clicked ? aboutMeLong : aboutMeBrief}</div>
                    <Skills display={clicked} />
                    <div className={clicked ? `${s.linksWrap} ${s.clicked}` : s.linksWrap}>
                        {
                            socialMedia.map((link, i) => (
                                <a
                                    key={`${link.name}0${++i}`}
                                    className={clicked ? `${s.clicked} ${s.link}` : s.link}
                                    onClick={handleClick}
                                    href={link.url}>
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            )}
        </SSC.Card>
    );
};

export default AboutMe;
