import React from 'react';

import AppProvider from './hooks';
import Routes from './routes';

import './assets/styles/global.css';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
