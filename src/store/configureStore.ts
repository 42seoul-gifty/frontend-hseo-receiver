import { combineReducers, createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga'
import modalReducer from 'store/reducers/modal';
import pageReducer from './reducers/page';
//import { watcherSaga } from './sagas/rootSaga'

export const rootReducer = combineReducers({
  modal: modalReducer,
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

//const sagaMiddleware = createSagaMiddleware()
//const middleware = [sagaMiddleware]
const store = createStore(rootReducer);

//sagaMiddleware.run(watcherSaga)

export default store;