import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
serviceWorker.unregister();


