import React from 'react';
import Header from './header';
import Content from './content';
import Welcome from './welcome';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Content />
  </main>
);

export default Main;

