import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from './component/particle';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Particles />
  </React.StrictMode>,
  document.getElementById('root')
);
