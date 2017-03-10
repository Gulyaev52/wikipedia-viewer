import React from 'react';
import { shallow } from 'enzyme';
import Paginator from '../Paginator';

describe('Paginator', () => {
    const data = {
        countPages: 10,  
        currentPage: 1,
    };
    const spies = {
        onSelectPage: sinon.spy()
    };
    let component = null;

    beforeEach(() => {
        component == <Paginator {...data} {...spies} />
    });

    it('Если кол-во страниц равно 10, то должно отрендериться 10 ссылок', () => {

    });

    it('Если текущая страница равна 5, то активной должна быть 5-ая ссылка', () => {

    });
});