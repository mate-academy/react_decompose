import React from 'react';
import '../Main.scss';
import Welcome from './Welcome';
import Header from './Header';
import Articles from './Articles';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Articles />
    </main>
  );
}

export default App;
