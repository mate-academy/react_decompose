import { createRoot } from 'react-dom/client';

import App from './App';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';

createRoot(document.getElementById('root')).render(
  <App />,
  <Welcome />,
  <Header />,
  <Article />,
  <Navigation />,
);
