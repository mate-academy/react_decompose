import './App.css';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { Navigation } from './components/Navigation/Navigation';
import { Article } from './components/Article/Article';

export function App() {
  return (
    <main className="App">
      <Welcome />
      <Header>
        <Navigation />
      </Header>
      <Article />
    </main>
  );
}
