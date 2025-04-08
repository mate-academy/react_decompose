import { createRoot } from 'react-dom/client';

import App from './App';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

createRoot(document.getElementById('root')).render(
  <App>
    <Header />

    <Welcome />

    <Navigation />

    <Article />
  </App>,
);
