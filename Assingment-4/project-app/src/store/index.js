import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';

//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
});


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
