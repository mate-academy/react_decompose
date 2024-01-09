import React from 'react';
import './App.css';
import WelcomeApp from './components/Welcome/Welcome';
import HeaderApp from './components/Header/Header';
import ArtcicleApp from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <WelcomeApp />
    <HeaderApp />
    <ArtcicleApp />
  </main>
);

export default App;
