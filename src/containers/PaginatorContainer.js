import React from 'react';
import { connect } from 'react-redux';

import Paginator from '../components/Paginator/Paginator';
import { togglePage } from '../actions';


let PaginatorContainer = (props) => (
    props.countPages > 1 && <Paginator {...props} />
);

const mapStateToProps = (state) => {
    return {
        countPages: state.paginator.countPages,
        currentPage: state.paginator.currentPage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectPage(pageNum) {
            dispatch(togglePage(pageNum));
        }
    }
}

PaginatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginatorContainer);

export default PaginatorContainer;