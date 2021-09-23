import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../App';
import Main from '../Main';
import Profile from '../Profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route hraf="../Profile" component={Profile} />
    <IndexRoute component={Profile} />
    <Route hraf="../Main" component={Main} />
  </Route>
);