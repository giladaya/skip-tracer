import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App data={Data}/>,
  document.getElementById('root')
);
