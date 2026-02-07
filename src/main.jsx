import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/extensions
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
