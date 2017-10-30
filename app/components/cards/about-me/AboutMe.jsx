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

const aboutMeBrief = `I am a developer who loves solving creative...`; // I am a developer with an eye for design and an ear for music. 
const aboutMeLong = `I am a developer who loves solving creative challenges. I came from a background in audio engineering and sound design. Now I enjoy discovering experimental methods of utilizing music through computer code.`;

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
