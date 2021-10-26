import React from 'react';

export const Header = () => {
  const title = 'Site Name';
  const navLinks = ['About', 'Services', 'Contact'];

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <nav className="navigation">
        {navLinks
          .map(link => (
            <a key={link} className="navigation__link" href="#about">{link}</a>
          ))}
      </nav>
    </header>
  );
};
