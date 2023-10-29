import React from 'react';
import Wellcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => (

  <main className="app">
    <Wellcome />
    <Header />
    <Article />
  </main>
);

export default App;
