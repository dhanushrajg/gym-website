/*
  ENNA PANROM: main.jsx — old CSS imports remove pannrom.
  YEN: why.css, about.css, book.css — ellam delete pannrom already.
  Ippo mattum import pannaa build fail aagum.
  index.css mattum irunthal போதும் — Tailwind athu la iruku.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; /* Only this — Tailwind directives here */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
