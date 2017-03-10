import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes'; 
import { generateWikipediaQuery, generatePageLink } from '../helpers';


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

export function openSearchBar(text) {
    return {
        type: types.OPEN_SEARCHBAR
    };
}

export function closeSearchBar(text) {
    return {
        type: types.CLOSE_SEARCHBAR
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
    return (dispatch) => {
        dispatch(requestArticles(text));
        
        return fetchJsonp(generateWikipediaQuery(text))
            .then(response => response.json())
            .then((data) => {     
                const pages = data.query.pages; 
                const articles = Object.entries(pages).map(([k, v]) => ({
                    title: v.title,
                    description: v.extract,
                    link: generatePageLink(v.pageid)
                }));     
                dispatch(receiveArticles(articles));
            });
    }
} 

function mockFetchArticles(text) {
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

        return fetch(generateWikipediaQuery(text), { mode: 'cors' })
            .then(response => response.json())
            .then((data) => {  
                const pages = data.query.pages;
                const articles = Object.entries(pages).map((v, k) => ({
                    title: v.title,
                    description: v.extract,
                    link: generatePageLink(v.pageid)
                }));
                console.log(articles);
                dispatch(receiveArticles(articles));
            });
    }
} 