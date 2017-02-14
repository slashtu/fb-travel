import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  )

  sagaMiddleware.run(sagas);

  return store;
}
