import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

ReactDOM.render(
  <div>
    <App />
    <Welcome />
    <Header />
    <Article />
  </div>,
  document.getElementById('root'),
);
