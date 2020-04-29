import { combineReducers, createStore } from 'redux';
import Events from './Events';

const AppReducers = combineReducers({
    Events
});

const appStore = createStore(AppReducers);

export default appStore;