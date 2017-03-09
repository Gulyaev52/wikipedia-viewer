import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

import rootReducer from '../reducers';


export default (initialState) => {
  const logger = configureLogger();

  const store = createStore(rootReducer, applyMiddleware(thunk, logger), initialState);  
  
  return store
} 

function configureLogger() {
  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
  };

  const logger = createLogger({
    stateTransformer,
  });

  return logger;
};