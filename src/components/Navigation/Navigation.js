import React from 'react';
import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink';

const navItem = [
  {
    name: 'About', href: '#',
  },
  {
    name: 'Services', href: '#',
  },
  {
    name: 'Contact', href: '#',
  },
];

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavigationLink navItem={navItem} />
    </nav>
  );
};

export default Navigation;
