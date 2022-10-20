import React from 'react';
import ReactDOM from 'react-dom/client';
// 国际化i18n
import "./config/i18nOpt/i18n";

import BaseRouter from './router'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BaseRouter />
  // </React.StrictMode>
);