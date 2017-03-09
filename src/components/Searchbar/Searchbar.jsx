import React from 'react';
import classNames from 'classnames';

import './Searchbar.styl'; 


const Searchbar = ({ text, isOpen, onSubmit }) => (
    <div className={classNames('searchbar', { 'searchbar_open': true })}>
        <form className='searchbar__form' onSubmit={(e) => {
            e.preventDefault(); 
            onSubmit(text);
        }}>
            <input className='searchbar__input' />
        </form>
    </div>
);  

export default Searchbar;