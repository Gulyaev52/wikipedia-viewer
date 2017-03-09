import React from 'react';

import './Articles.styl'; 
import Article from '../Article/Article'; 


const Articles = ({ items }) => (
    <ul className='articles'>
        { renderArticleItems(items) }
    </ul>
)

const renderArticleItems = (items) => (
    items.map((article) => (
        <li className='articles__item' key={article.id}>
            <Article {...article}/>
        </li>
    ))
);

export default Articles;