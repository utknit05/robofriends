import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducers';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
	<Provider store={store} >
	  <App />
	</Provider>
	,document.getElementById('root'));
registerServiceWorker();