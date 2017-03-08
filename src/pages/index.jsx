import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.styl';
import '../theme/global.styl';

import configureStore from '../store/configureStore';

import Articles from '../components/Articles/Articles';

import { fetchArticles } from '../actions';

const store = configureStore();

const ArticleConfig = {
    title: 'Gangsta rap',
    description: 'Gangsta rap or gangster rap is a subgenre of hip hop music with themes and lyrics that generally emphasize the "gangsta" lifestyle.'
};

const items = new Array(10).fill(ArticleConfig);

ReactDOM.render(
    <Articles items={items} />,
    document.querySelector('#app')
);