import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <nav className="navigation">
        <a className="navigation__link" href="https://reactjs.org">About</a>
        <a className="navigation__link" href="https://reactjs.org">Services</a>
        <a className="navigation__link" href="https://reactjs.org">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
