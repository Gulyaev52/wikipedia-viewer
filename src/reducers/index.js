import { combineReducers } from 'redux';
import { Map } from 'immutable';

import articles from './articles';
import paginator from './paginator';

const rootReducer = combineReducers({
    articles,
    paginator
});

export default rootReducer;