import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import theme from 'theme';

import App from './App.jsx';
import Providers from 'Providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
