import React from 'react';
import { connect } from 'react-redux';

import Articles from '../components/Articles/Articles';
import Spinner from '../components/Spinner/Spinner';
import { COUNT_ARTICLES_PER_PAGE } from '../constants/Paginator';
import { getShownArticles } from '../helpers';
import './ArticlesContainer.styl';


let ArticlesContainer = (props) => {
    return (
        <div className='articles-container'>
            {
                props.isFetching ?
                    <div className='articles-container__spinner'>
                        <Spinner />
                    </div> :
                    <div className='articles-container__articles'>
                        <Articles {...props} />
                    </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    const { items, isFetching } = state.articles;
    const { currentPage } = state.paginator;
    
    return {
        items: getShownArticles(items, currentPage, COUNT_ARTICLES_PER_PAGE),
        isFetching
    };
}

ArticlesContainer = connect(
    mapStateToProps
)(ArticlesContainer);

export default ArticlesContainer;