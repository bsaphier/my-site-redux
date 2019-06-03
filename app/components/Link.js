import React from 'react';
import PropTypes from 'prop-types';
import s from './site-description.scss';

function handleClick(event) {
  event.stopPropagation();
  event.preventDefault();
  window.open(event.target.href);
}

function Link({ href, children, ...props }) {
  return (
    <a className={s.inlineLink} onClick={handleClick} href={href} {...props}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default Link;
