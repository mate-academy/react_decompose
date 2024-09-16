import React from 'react';
import './App.css';
import Head from './components/Header/Header';
import Title from './components/Welcome/Welcome';
import Text from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Title /> <Head /> <Text />
    </main>
  );
}

export default App;
