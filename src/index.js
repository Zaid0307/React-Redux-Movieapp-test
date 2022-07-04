import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
