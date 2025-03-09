import React from "react";
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')).render(<App />);

const page = ReactDOM.createRoot(document.getElementById('page'));
page.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
