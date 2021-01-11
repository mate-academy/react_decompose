import React from 'react';
import '../App.css';
import '../css-components/welcome.css';
import '../css-components/nav.css';
import '../css-components/text.css';
import Sticky from './sticky-header';
import Article from './article';
import Header from './header';

function App() {
  return (
    <main className="app">
      <Sticky />
      <Header />
      <Article />
    </main>
  );
}

export default App;
