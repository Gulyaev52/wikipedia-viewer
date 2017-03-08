import './Searchbar.styl';

import React from 'react';
import classNames from 'classnames';


export default class Searchbar extends React.Component {
    render() {
        const { text, isOpen } = this.props;

        return (
            <div className={classNames('searchbar', { 'searchbar_open': isOpen })}>
                <form className='searchbar__form'>
                    <input className='searchbar__input' />
                </form>
            </div>
        );
    }
}