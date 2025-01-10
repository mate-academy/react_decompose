import { createRoot } from 'react-dom/client';

import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Navigation />
      <Article />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
