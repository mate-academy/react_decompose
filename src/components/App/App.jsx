import React from 'react';
import '../../Main.scss';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';

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
