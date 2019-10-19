import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return merge({}, action.comments);
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            delete newState[action.commentId]
            return newState;
        default:
            return oldState;
    }
}

export default commentsReducer;
