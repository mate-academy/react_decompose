import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import './components/Header/Header.css';
import { Article } from './components/Article/Article';
import './components/Article/Article.css';
import './components/Header/Navigation/Navigation.css';
import { Welcome } from './components/Welcome/Welcome';
import './components/Welcome/Welcome.css';

// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <div>
        <Welcome />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Article />
      </div>
    </main>
  );
}

export default App;
