import { combineReducers } from 'redux';
import { Map } from 'immutable';

import articles from './articles';
import paginator from './paginator';
import searchbar from './searchbar';

const rootReducer = combineReducers({
    articles,
    paginator,
    searchbar
});

export default rootReducer;