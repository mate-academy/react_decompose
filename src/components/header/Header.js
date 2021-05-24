import React from 'react';
import './index.css';
import Navigation from '../navigation/Navigation';
import StickyHeader from '../sticky-header/StickyHeader';

function Header() {
  return (
    <>
      <StickyHeader />
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </>
  );
}

export default Header;
