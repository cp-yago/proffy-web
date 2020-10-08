import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
  </BrowserRouter>
);

export default Routes;
