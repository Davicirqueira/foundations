import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routers from './routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);

