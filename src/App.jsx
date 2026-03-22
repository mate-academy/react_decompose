import { React } from 'react';
import { Article } from './components/Article/Article.jsx';
import { Header } from './components/Header/Header.jsx';
import { Welcome } from './components/Welcome/Welcome.jsx';
import './App.scss';
// Move each BEM block to a separate component (file) and import them here

export const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
