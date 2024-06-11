import { createRoot } from 'react-dom/client';
import App from './App';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Welcome />
    <Header />
    <Article />
  </>,
);
