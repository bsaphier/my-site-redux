import React from 'react';
import SSC from 'react-ssc';
import s from './cards.scss';


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
    },
    {
        name: 'Stack Overflow',
        url: 'http://stackoverflow.com/story/bsaphier'
    }
];

const aboutMe = `I'm some kind of person that does stuff n things.`;

const handleClick = ($event) => {
    window.open($event.target.href);
    $event.preventDefault();
    $event.stopPropagation();
};

const AboutMe = () => {
    return (
        <SSC.Card title={'About Me'}>
            {(clicked) => (
                <div className={clicked ? `${s.clicked} ${s.cContent}` : s.cContent}>
                    <div className={clicked ? `${s.linksWrap} ${s.clicked}` : s.linksWrap}>
                        {
                            socialMedia.map((link, i) => (
                                <a
                                    key={`${link.name}0${++i}`}
                                    className={clicked ? `${s.clicked} ${s.icon}` : s.icon}
                                    onClick={handleClick}
                                    title={link.name}
                                    href={link.url}>
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>
                    <span>{aboutMe}</span>
                </div>
            )}
        </SSC.Card>
    );
};

export default AboutMe;
