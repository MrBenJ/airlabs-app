import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import rootSaga from './sagas';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './index.css';

const { store, sagaMiddleware } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
registerServiceWorker();
