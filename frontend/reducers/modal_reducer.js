import { OPEN_MODAL, CLOSE_MODAL, OPEN_SHOW_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: action.modal };
        case CLOSE_MODAL:
            return null;
        // case OPEN_SHOW:
        case OPEN_SHOW_MODAL:
            return { modal: action.modal, post: action.post}
        default:
            return state;
    }
}
