import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18
import App from './App';

// Criando o root com createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
