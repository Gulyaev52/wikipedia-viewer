import React from 'react';
import classNames from 'classnames';

import './Searchbar.styl'; 


const Searchbar = ({ text, isOpen, onSubmit, onOpen, onClose, onEditText }) => (
    <div 
        className={classNames('searchbar', { 'searchbar_open': isOpen })}
        onClick={openSearchbar.bind(this, isOpen, onOpen)}
    >
        <form className='searchbar__form' onSubmit={handleSubmit.bind(this, onSubmit, text)}>
            <input className='searchbar__input' onChange={editText.bind(this, onEditText)} />
        </form>
    </div>
);

const openSearchbar = (isOpen, onOpen) => { 
    if (!isOpen)
        onOpen();
}  

const handleSubmit = (onSubmit, text, e) => {
    e.preventDefault(); 
    onSubmit(text);
}  

const editText = (onEditText, { target }) => { 
    onEditText(target.value);
}


export default Searchbar;