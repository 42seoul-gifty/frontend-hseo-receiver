import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from 'pages/MainPage';
import GiftPage from 'pages/GiftPage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import { getReceiver } from 'store/actions/receiver';
import { RootState } from 'store/configureStore';
import { FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import { getChoice } from 'store/actions/choice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceiver('43'));
    dispatch(getChoice('43'));
  }, []);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
/*
const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
`;
*/
