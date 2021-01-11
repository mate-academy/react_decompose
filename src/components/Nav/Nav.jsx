import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

export const Nav = () => {
  const HeaderNavItemArray = [
    {
      id: 0, href: '#about', text: 'About',
    },
    {
      id: 1, href: '#services', text: 'Services',
    },
    {
      id: 2, href: '#contact', text: 'Contact',
    },
  ];

  const HeaderNavItem = ({ href, text }) => (
    <a className="navigation__link" href={href}>
      {text}
    </a>
  );

  HeaderNavItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  // HeaderNavItem.defaultProps = {
  //   href: '#about',
  //   text: 'About',
  // };

  return (
    <nav className="navigation">
      {HeaderNavItemArray.map((el, key) => (
        <HeaderNavItem key={el.id} href={el.href} text={el.text} />
      ))}
    </nav>
  );
};
