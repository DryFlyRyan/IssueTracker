import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { connectRoutes } from 'redux-first-router';
import qs from 'qs';
import { routeMap } from 'data/Router/Routes';
import reducers from './rootReducer';
import sagas from './rootSagas';

const envFlag = process.env.REACT_APP_API_CONFIG;

const localEnvs = [
  'local',
  'mocks',
  'sandbox',
];

const composeEnhancers = (...args) => {
  return typeof window !== 'undefined' || localEnvs.find((env) => env === envFlag)
    ? composeWithDevTools(...args)
    : compose(...args);
};

function configureStoreProd(hist, initialState) {
  const {
    reducer,
    middleware,
    enhancer,
  } = connectRoutes(
    routeMap,
    {
      history: hist,
      querySerializer: qs,
    },
  );

  const sagaMiddleware = createSagaMiddleware();
  const otherMiddlewares = [
    sagaMiddleware,
    thunk,
  ];

  const rootReducer = combineReducers({ ...reducers, location: reducer });

  const middlewares = applyMiddleware(...[middleware, ...otherMiddlewares]);
  const enhancers = composeEnhancers(enhancer, middlewares);

  const store = createStore(rootReducer, initialState, enhancers);
  // expose store when run in Cypress
  if (window.Cypress) {
    window.store = store;
  }

  sagaMiddleware.run(sagas);

  return { store };
}

function configureStoreDev(hist, initialState) {
  const {
    reducer,
    middleware,
    enhancer,
  } = connectRoutes(
    routeMap,
    {
      history: hist,
      querySerializer: qs,
    },
  );

  const sagaMiddleware = createSagaMiddleware();
  const otherMiddlewares = [
    sagaMiddleware,
    thunk,
  ];

  const rootReducer = combineReducers({ ...reducers, location: reducer });

  const middlewares = applyMiddleware(...[middleware, ...otherMiddlewares]);
  const enhancers = composeEnhancers(enhancer, middlewares);

  const store = createStore(rootReducer, initialState, enhancers);
  // expose store when run in Cypress
  if (window.Cypress) {
    window.store = store;
  }

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer({ rootReducer, location: reducer });
    });
  }

  sagaMiddleware.run(sagas);

  return { store };
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
