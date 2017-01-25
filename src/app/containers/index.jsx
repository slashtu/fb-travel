import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import Redirect from 'react-router/lib/Redirect';
import browserHistory from 'react-router/lib/browserHistory';

import App from './App';
import APnxg from './AP';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path='AP' component={APnxg} />
    </Route>
    <Redirect from='*' to={'App'} />
  </Router>
);

export default routes;