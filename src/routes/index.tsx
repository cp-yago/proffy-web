import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';
import ForgotPassword from '../pages/ForgotPassword';
import ForgotPasswordSent from '../pages/ForgotPasswordSent';
import ResetPassword from '../pages/ResetPassword';
import GiveClasses from '../pages/GiveClasses';
import CreateClass from '../pages/CreateClass';
import ClassList from '../pages/ClassList';

import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signup-success" exact component={SignUpSuccess} />

    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/forgot-password-sent" exact component={ForgotPasswordSent} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/landing" exact component={Landing} isPrivate />
    <Route path="/give-classes" exact component={GiveClasses} isPrivate />
    <Route path="/create-class" exact component={CreateClass} isPrivate />

    <Route path="/study" exact component={ClassList} isPrivate />
  </BrowserRouter>
);

export default Routes;
