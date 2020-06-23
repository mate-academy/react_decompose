import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

function Header({ headerClass, headerText, navClass, navLinks }) {
  const links = navLinks.map(link => (
    <Link
      linkClass={`${navClass}__link`}
      linkHref={`#${link.toLowerCase()}`}
      linkText={link}
      key={link}
    />
  ));

  return (
    <header className={headerClass}>
      <h1 className={`${headerClass}__title`}>{headerText}</h1>
      <nav className={navClass}>
        {links}
      </nav>
    </header>
  );
}

Header.propTypes = {
  headerClass: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  navClass: PropTypes.string.isRequired,
  navLinks: PropTypes.isRequired,
};

export default Header;
