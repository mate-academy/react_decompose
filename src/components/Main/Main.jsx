import React from 'react';
import Header from './subcomponents/Header/Header';
import Welcome from './subcomponents/Welcome/Welcome';
import Text from './subcomponents/Text/Text';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Text />
  </main>
);

export default Main;
