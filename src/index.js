import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

ReactDOM.render(
  <App
    welcome={<Welcome />}
    header={<Header />}
    article={<Article />}
  />,
  document.getElementById('root'),
);
