import { REQUEST_ARTICLES, RECEIVE_ARTICLES  } from '../constants/ActionTypes';

const initialArticles = {
    isFetching: false,
    items: []
};

export default function(state = initialArticles, action) {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_ARTICLES:
            return { 
                items: action.articles,
                isFetching: false
            };
        default:
            return state;
    }
} 