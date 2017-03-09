import React from 'react';
import classNames from 'classnames';

import './Paginator.styl';


class Paginator extends React.Component {
    selectPage({ target }) { 
        if ('pageNum' in target.dataset) {
            const pageNum = Number(target.dataset.pageNum); 
            this.props.onSelectPage(pageNum);
        }
    }

    renderPageNumItems(countPages, currentPage) {
        const createPageNums = (countPages) => (
            new Array(countPages).fill(null).map((_, i) => i + 1)
        ); 

        return createPageNums(countPages).map((pageNum) => ( 
            <a 
                href='#' 
                data-page-num={pageNum}
                key={pageNum}
                className={classNames({
                    'paginator__page-num': true,
                    'paginator__page-num_current': pageNum == currentPage
            })}>
                {pageNum}
            </a> 
        ));
    }

    render() {
        const {
            countPages,
            onSelectPage,
            currentPage = 1,
        } = this.props;

        return (
            <div className='paginator' onClick={this.selectPage.bind(this)}>
                <a 
                    href='#' 
                    data-page-num='1' 
                    className={classNames({
                        'paginator__toggle': true,
                        'paginator__toggle_first-page': true,
                        'paginator__toggle_disable': currentPage == 1
                })}>
                    {'<<'}
                </a>
                <a 
                    href='#' 
                    data-page-num={currentPage - 1} 
                    className={classNames({
                        'paginator__toggle': true,
                        'paginator__toggle_prev-page': true,
                        'paginator__toggle_disable': currentPage == 1
                })}>
                    {'<'}
                </a>
                { this.renderPageNumItems(countPages, currentPage) }
                <a 
                    href='#' 
                    data-page-num={currentPage + 1}
                    className={classNames({
                        'paginator__toggle': true,
                        'paginator__toggle_next-page': true,
                        'paginator__toggle_disable': currentPage == countPages
                })}>
                    {'>'}
                </a>
                <a 
                    href='#' 
                    data-page-num={countPages}
                    className={classNames({
                        'paginator__toggle': true,
                        'paginator__toggle_last-page': true,
                        'paginator__toggle_disable': currentPage == countPages
                })}>
                    {'>>'}
                </a>
            </div>
        );
    }
}

export default Paginator;