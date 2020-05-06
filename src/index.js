import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './screens/App';

ReactDOM.render(
 
  <App />,

  document.getElementById('root')
);



serviceWorker.unregister();
