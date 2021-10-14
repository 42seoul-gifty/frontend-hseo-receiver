import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
