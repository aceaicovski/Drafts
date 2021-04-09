import { BUTTON_CLICK } from '../actions/constants';

const initState = {
    clicked: false
}

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case BUTTON_CLICK: {
            return {
                ...state,
                clicked: action.payload
            }
        }
        default:
            return state;
    } 
}