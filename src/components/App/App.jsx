import React from 'react';

import SearchbarContainer from '../../containers/SearchbarContainer';
import ArticlesContainer from '../../containers/ArticlesContainer';
import PaginatorContainer from '../../containers/PaginatorContainer';
import './App.styl'; 


const App = () => { 
    return (
        <div className='app'>
            <div className='app__searchbar'>
                <SearchbarContainer />
            </div>
            <div className='app__articles'>
                <ArticlesContainer />
            </div>
            <div className='app__paginator'>
                <PaginatorContainer />
            </div>
        </div>
    );
}

export default App;