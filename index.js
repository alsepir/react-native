'use strict'

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './src/redux/Reducers'

const store = createStore(reducers)

const ReduxApp = () => (  
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
