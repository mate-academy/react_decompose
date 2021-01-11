import React from 'react';
import Link from '../link/link';

function Navigation() {
  return (
    <nav className="navigation">
      <Link
        href="#about"
        text="About"
      />
      <Link
        href="#services"
        text="Services"
      />
      <Link
        href="#contact"
        text="Contact"
      />
    </nav>
  );
}

export default Navigation;
