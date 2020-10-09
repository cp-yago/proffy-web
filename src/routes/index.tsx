import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';
import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signup-success" exact component={SignUpSuccess} />

    <Route path="/landing" exact component={Landing} isPrivate />
  </BrowserRouter>
);

export default Routes;
