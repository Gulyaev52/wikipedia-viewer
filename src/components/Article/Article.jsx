import React from 'react'; 
import './Article.styl';


const Article = ({ title, description, link='#' }) => {
    return (
        <a href={link} className='article'>
            <h2 className='article__title'>{title}</h2>
            <p className='article__description'>
                {description}
            </p>
        </a>
    );
}


export default Article;