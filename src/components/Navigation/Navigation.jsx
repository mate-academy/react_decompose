import React from 'react';
import './Navigation.css';
import { Link } from './Link/Link';
import NavItems from '../../data/navItems.json';

export const Navigation = () => (
  <nav className="navigation">
    {NavItems.map(link => (
      <Link
        key={link.id}
        href={link.href}
        text={link.text}
      />
    ))}
  </nav>
);
