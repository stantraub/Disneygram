import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';
import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LIKE:
            let userLike = Object.values(newState).filter(user => user.id === action.like.author_id)[0];
            let userPostLike = Object.values(userLike.posts).filter(post => post.id === action.like.post_id)[0];
            userPostLike.likes.push(action.like);
            return newState;

            
        case REMOVE_LIKE:
            let userUnlike = Object.values(newState).filter(user => user.id === action.like.author_id)[0]
            let userPostUnlike = Object.values(userUnlike.posts).filter(post => post.id === action.like.post_id)[0]
            userPostUnlike.likes.pop(action.like);
            return newState;
        
        case RECEIVE_COMMENT:
            let userComment = Object.values(newState).filter(user => user.id === action.comment.post_author)[0];
            let userPostComment = Object.values(userComment.posts).filter(post => post.id === action.comment.post_id)[0];
            // debugger
            userPostComment.comments.push(action.comment);
            return newState;
        

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