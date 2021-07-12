import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Text from './components/Text/Text';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Text />
    </main>
  );
}

export default App;
