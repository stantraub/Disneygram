import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';
import { REMOVE_LIKE } from "../actions/like_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_FOLLOW:
            Object.values(newState).forEach(user => { if (user.id === action.follow.following_id) { user.followers.push(action.follow) } })
            return newState;
        case REMOVE_FOLLOW:
            Object.values(newState).forEach(user => { 
                // debugger
                if (user.followers.length > 0) {
                    if (user.followers.filter(follower => follower.id)[0].id === action.followId){ 
                        
                        user.followers.pop(action) 
                    } 
                }
            })
            return newState;
        default:
            return state;
    }

}

export default userReducer;