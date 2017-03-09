import { connect } from 'react-redux';

import Searchbar from '../components/Searchbar/Searchbar';
import { fetchArticles } from '../actions';


const mapStateToProps = (state) => {
    return {
        isOpen: state.searchbar.isOpen,
        text: state.searchbar.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(text) {
            dispatch(fetchArticles(text));
        }
    }
}

const SearchbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;