import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';

import tasksApp from './reducers';

const reducers = combineReducers({
	tasksApp,
});

export default createStore(reducers, load(), composeWithDevTools(applyMiddleware(save())));

