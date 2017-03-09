export const getShownArticles = (articles, currentPage, countArticlesPerPage) => {
    const from = (currentPage - 1) * countArticlesPerPage;
    const to = from + countArticlesPerPage;
    return articles.slice(from, to)
};

export const getCountPages = (countArticles, countArticlesPerPage) => (
    Math.ceil(countArticles / countArticlesPerPage)
);