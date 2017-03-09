import { TOGGLE_PAGE, RECEIVE_ARTICLES } from '../constants/ActionTypes';
import { COUNT_ARTICLES_PER_PAGE } from '../constants/Paginator';
import { getCountPages } from '../helpers';

const initialPaginator = {
    isShow: false,
    currentPage: 1,
    countPages: 1
}; 

export default function(state = initialPaginator, action) {
    switch(action.type) {
        case TOGGLE_PAGE:
            return {
                ...state,
                currentPage: action.pageNum
            };
        case RECEIVE_ARTICLES: 
            const countPages = getCountPages(action.articles.length, 
                                             COUNT_ARTICLES_PER_PAGE);
            const isShow = countPages > 1;
        
            return {
                ...state,
                countPages,
                isShow
            };
        default:
            return state;
    }
}