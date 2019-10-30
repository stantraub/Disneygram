import { OPEN_MODAL, CLOSE_MODAL, OPEN_SHOW_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";

export default function modalReducer(state = [], action) {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: action.modal };
        case CLOSE_MODAL:
            return null;
        // case OPEN_SHOW:
        case OPEN_SHOW_MODAL:
            return { modal: action.modal, post: action.post}
        case RECEIVE_COMMENT:
            if (Object.values(newState).filter(post => post.id === action.comment.post_id)[0]) {
                const post = Object.values(newState).filter(post => post.id === action.comment.post_id)[0];
                post.comments.push(action.comment);
                return newState;
            }
        case RECEIVE_LIKE:
            Object.values(newState).forEach(post => { if (post.id === action.like.post_id) { post.likes.push({ user_id: action.like.user_id }) } })
       
            return newState;
        case REMOVE_LIKE:

            // newState[action.like.post_id].likes = newState[action.like.post_id].likes.filter(id => id !== action.like.user_id);
            Object.values(newState).forEach(post => { if (post.id === action.like.post_id) { post.likes.pop({ user_id: action.like.user_id }) } })
            return newState;
        default:
            return state;
    }
}
