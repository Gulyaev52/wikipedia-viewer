import React from 'react';

import './Articles.styl'; 
import Article from '../Article/Article'; 


const renderArticleItems = (items) => (
    items.map((article) => (
        <li className='articles__item'>
            <Article {...article} />
        </li>
    ))
);

const Articles = ({ items }) => (
    <ul className='articles'>
        { renderArticleItems(items) }
    </ul>
)

export default Articles;