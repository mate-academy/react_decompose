import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Header = ({ headerClass, headerText, navClass, navLinks }) => (
  <header className={headerClass}>
    <h1 className={`${headerClass}__title`}>{headerText}</h1>
    <nav className={navClass}>
      {navLinks.map(link => (
        <Link
          linkClass={`${navClass}__link`}
          href={`#${link.toLowerCase()}`}
          linkText={link}
          key={link}
        />
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  headerClass: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  navClass: PropTypes.string.isRequired,
  navLinks: PropTypes.isRequired,
};

export { Header };
