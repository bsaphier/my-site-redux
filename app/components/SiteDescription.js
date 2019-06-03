import React from 'react';
import SSC from 'react-ssc';
import s from './site-description.scss';
import Link from './Link';

function SiteDescription() {
  return (
    <SSC.Cell style={{height: '100%'}}>
      <SSC.Title className={s.customTitle} style={{fontSize: '28px'}}>
        WELCOME TO MY WEBSITE
      </SSC.Title>
      <p className={s.content}>
        This is mostly a placeholder but let me tell about what you are looking at (and
        possibly hearing). To implement the design of this website, I built a small
        <Link href="https://bsaphier.github.io/simple-site-components/"> library </Link>
        of <Link href="https://reactjs.org/"> React </Link> components. The interactive audio
        (for an example, hover your cursor over the welcome message) is being synthesized in your
        browser using the <Link href="https://webaudio.github.io/web-audio-api/"> web audio
        api</Link>. Some other useful libraries/tools that I used to build this site were
        <Link href="https://github.com/chenglou/react-motion"> React-Motion</Link>,
        <Link href="https://webpack.js.org/"> Webpack</Link>, and of course,
        <Link href="https://babeljs.io/"> Babel</Link>.
      </p>
    </SSC.Cell>
  );
}

export default SiteDescription;
