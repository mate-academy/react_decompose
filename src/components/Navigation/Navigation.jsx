import React from 'react';
import './Navigation.css';
import { Item } from './Item/Item';
import NavItems from '../../data/navItems.json';

export const Navigation = () => (
  <nav className="navigation">
    {NavItems.map(el => (
      <Item key={el.id} href={el.href} text={el.text} />
    ))}
  </nav>
);
