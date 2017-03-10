import { OPEN_SEARCHBAR, CLOSE_SEARCHBAR, EDIT_SEARCH } from '../constants/ActionTypes';

const initialSearchbar = {
    isOpen: false,
    text: null
};

export default function(state = initialSearchbar, action) {
    switch (action.type) {
        case OPEN_SEARCHBAR:
            return { 
                isOpen: true,
                text: ''
            };
        case CLOSE_SEARCHBAR:
            return initialSearchbar;
        case EDIT_SEARCH:
            return {
                ...state,
                text: action.text
            };
        default: 
            return state;
    }
} 