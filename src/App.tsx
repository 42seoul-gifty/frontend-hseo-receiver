import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from 'pages/MainPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import LastPage from 'pages/LastPage';
import { getReceiver } from 'store/actions/receiver';
import { RootState } from 'store/configureStore';
import { FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import { getChoice } from 'store/actions/choice';
import ExpiredPage from 'pages/ExpiredPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceiver('44'));
    dispatch(getChoice('44'));
  }, []);

  const page = useSelector((state: RootState) => state.page);
  const receiver = useSelector((state: RootState) => state.receiver.receiver);
  const [naviState, setNaviState] = useState(false);

  useEffect(() => {
    if (page) setNaviState(true);
  }, [page]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/last' exact component={LastPage} />
        <Route
          path='/'
          exact
          render={() => {
            if (receiver?.product && page === 0) return <ExpiredPage />;
            else return <MainPage />;
          }}
        />
      </Switch>
    </BrowserRouter>
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
