import React from 'react';
import style from './App.module.css';
import { Welcome } from './components/welcome/Welcome';
import { Header } from './components/header/Header';
import { Article } from './components/article/Article';

function App() {
  return (
    <main className={style.app}>
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
