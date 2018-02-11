import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './App';
import SpacesIndex from './components/spaces_index';
import SpacesShow from './components/spaces_show';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/spaces/:id" component={SpacesShow} />
        <Route path="/spaces" component={SpacesIndex} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
