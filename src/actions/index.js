import * as types from '../constants/ActionTypes'; 

export function togglePage(pageNum) {
    return {
        type: types.TOGGLE_PAGE,
        pageNum
    };
}

export function editSearch(text) {
    return {
        type: types.EDIT_SEARCH,
        text
    };
}

export function toggleSearchbar() {
    return {
        type: types.TOGGLE_SEARCHBAR
    };
}

export function requestArticles(text) {
    return {
        type: types.REQUEST_ARTICLES,
        text
    };
}

export function receiveArticles(articles) {
    return {
        type: types.RECEIVE_ARTICLES,
        articles
    }
}

export function fetchArticles(text) {
    const mockArticle = { 
        title: 'Ivan Nikitich Khovansky',
        description: 'Khovansky, Khovanski or Khovanskiy (Russian: Хованский) is a Russian masculine surname, its feminine counterpart is Khovanskaya or Khovanskaia.',
        id: 1
    }
    const mockArticles = new Array(22)
        .fill(mockArticle)
        .map((article, i) => ({ ...article, id: i + 1 })); 

    return (dispatch) => {
        dispatch(requestArticles(text));
        
        setTimeout(() => dispatch(receiveArticles(mockArticles)), 1500);

        // return fetch(generateWikipediaQuery(text), { mode: 'cors' })
        //     .then(response => response.json())
        //     .then((data) => {  
        //         const pages = data.query.pages;
        //         const articles = Object.entries(pages).map((v, k) => ({
        //             title: v.title,
        //             description: v.extract,
        //             link: generatePageLink(v.pageid)
        //         }));
        //         console.log(articles);
        //         dispatch(receiveArticles(articles));
        //     });
    }
} 

//helpers
function generateWikipediaQuery(text) {
    const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=100&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';                 
    const cb = '&callback=JSON_CALLBACK'; 

    return `${api}${text}`;
} 

function generatePageLink(pageId) {
    const page = 'https://en.wikipedia.org/?curid=';

    return page + pageId
}