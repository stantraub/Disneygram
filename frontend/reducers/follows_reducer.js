import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions';

import merge from 'lodash/merge';

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return merge({}, action.follows);
        case RECEIVE_FOLLOW:
            // debugger;
            newState[action.follow.id] = action.follow;
            return newState;
        case REMOVE_FOLLOW:
            // console.log(newState)
            delete newState[action.followId]
            return newState;
        default:
            return oldState;
    }
}

export default followsReducer;