import MainPage from 'pages/MainPage';
import GiftPage from 'pages/GiftPage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/gift' exact component={GiftPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
