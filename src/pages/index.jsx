import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.styl';
import '../theme/global.styl';
import configureStore from '../store/configureStore';
import App from '../components/App/App'; 


const store = configureStore(); 

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.querySelector('#app')
);