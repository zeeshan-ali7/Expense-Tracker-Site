import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import{ myStore,persistor }from './Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
// import myStore from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
    <App />

    </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
