import { TOGGLE_PAGE, RECEIVE_ARTICLES } from '../constants/ActionTypes';

const initialPaginator = {
    isShow: false,
    currentPage: 1,
    countPages: 1
};

const getCountPages = (countArticles, countArticlesPerPage = 5) => (
    countArticles / countArticlesOnPage + 1
);

export default function(state = initialPaginator, action) {
    switch(action.type) {
        case TOGGLE_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case RECEIVE_ARTICLES: 
            const countPages = getCountPages(action.articles.length);
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