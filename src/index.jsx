import ReactDOM from 'react-dom';
import { App } from './App';
// eslint-disable-next-line import/no-named-as-default
import Header from './components/Header/Header';
// eslint-disable-next-line import/no-named-as-default
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line import/no-named-as-default
import Article from './components/Article/Article';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
  <Header />,
  document.getElementById('root'),
  <Welcome />,
  document.getElementById('root'),
  <Article />,
  document.getElementById('root'),
);
