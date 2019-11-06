import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';
import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        // case RECEIVE_LIKE:
        //     debugger;
            
        //         const userPostLike = Object.values(Object.values(newState)[0].posts).filter(post => post.id === action.like.post_id)[0];
        //         userPostLike.likes.push(action.like);
        //         return newState;

            
        // case REMOVE_LIKE:
           
        //         const userPostUnlike = Object.values(Object.values(newState)[0].posts).filter(post => post.id === action.like.post_id)[0];
        //         userPostUnlike.likes.pop(action.like);
        //         return newState;
            

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
                if (user.followers.length > 0) {
                    let follow = user.followers.filter(follower => follower.id === action.followId)
                    if (follow){ 
                        user.followers.pop(follow) 
                    }
                }
            })
            return newState;
        default:
            return state;
    }

}

export default userReducer;