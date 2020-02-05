// external
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

// ours
import AppWrapper from 'components/containers/AppWrapper';
import configureStore from 'data/Root/configureStore';
import initialState from 'stateData';

const history = createBrowserHistory;
const { store } = configureStore(history, initialState);

const render = (Root) => {
  const root = document.getElementById('app');

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    root,
  );
};

render(AppWrapper);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('components/containers/AppWrapper', () => {
    // eslint-disable-next-line global-require
    const Root = require('components/containers/AppWrapper');

    render(Root);
  });
}
