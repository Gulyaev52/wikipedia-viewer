export const getShownArticles = (articles, currentPage, countArticlesPerPage) => {
    const from = (currentPage - 1) * countArticlesPerPage;
    const to = from + countArticlesPerPage;
    return articles.slice(from, to)
};

export const getCountPages = (countArticles, countArticlesPerPage) => (
    Math.ceil(countArticles / countArticlesPerPage)
);

export const generateWikipediaQuery = (text) => {
    const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=25&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';                 
    const cb = '&callback=JSON_CALLBACK'; 

    return api + text + cb;
} 

export const generatePageLink = (pageId) => {
    const page = 'https://en.wikipedia.org/?curid=';

    return page + pageId
}