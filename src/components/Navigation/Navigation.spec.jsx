import React from 'react';
import { mount } from '@cypress/react18';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders without crashing', () => {
    mount(<Navigation />);
  });
});
