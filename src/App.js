import React from 'react';
import './App.css';
import { Main } from './components/main';
import { page } from './components/page';

function App() {
  return <Main {...page} />;
}

export default App;
