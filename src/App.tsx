import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from 'pages/MainPage';
import GiftPage from 'pages/GiftPage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import { getReceiver } from 'store/actions/receiver';
import { RootState } from 'store/configureStore';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceiver());
  }, []);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
