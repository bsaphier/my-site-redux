import React from 'react';
import SSC from 'react-ssc';
import s from './footer.scss';

function Footer() {
  return (
    <SSC.Footer>
      <span className={s.footerText}>This site was made with love by Benjamin Saphier © 2017</span>
    </SSC.Footer>
  );
}

export default Footer;
