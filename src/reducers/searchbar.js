import { TOGGLE_SEARCHBAR, EDIT_SEARCHBAR } from '../constants/ActionTypes';

const initialSearchbar = {
    isOpen: false,
    text: ''
};

export default function(state = initialSearchbar, action) {
    switch (action.type) {
        case TOGGLE_SEARCHBAR:
            return {
                ...initialSearchbar,
                isOpen: !state.isOpen
            };
        case EDIT_SEARCHBAR:
            return {
                ...initialSearchbar,
                text: action.text
            };
        default: 
            return state;
    }
} 