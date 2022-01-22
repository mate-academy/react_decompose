import React from 'react';
import NavigationItem from './NavigationItem';
import { navItems } from '../../constants/mocContent';

const Navigation = () => (
  <nav>
    {navItems.map(item => (<NavigationItem item={item} key={item.id} />))}
  </nav>
);

export default Navigation;
