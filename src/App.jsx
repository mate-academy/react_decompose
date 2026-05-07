import React from 'react';
import './App.css';
// Імпортуємо компоненти (використовуємо default import, як зазначено у твоїх файлах)
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

// Головний компонент додатка
function App() {
  return (
    <main className="app">
      {/* 1. Заголовок (Navigation вже знаходиться всередині Header.jsx) */}
      <Header />

      {/* 2. Блок привітання */}
      <Welcome />

      {/* 3. Основна стаття */}
      <Article />
    </main>
  );
}

export default App;
