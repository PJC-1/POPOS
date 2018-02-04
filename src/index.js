import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
