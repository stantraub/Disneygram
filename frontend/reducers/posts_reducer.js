import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST,
} from '../actions/post_actions';
import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";
import merge from 'lodash/merge';

const PostsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_LIKE:
            Object.values(newState).forEach(post => { if (post.id === action.like.post_id) { post.likers.push(action.like) } })
            return newState;
        case REMOVE_LIKE:
            newState[action.like.post_id].likers = newState[action.like.post_id].likers.filter(id => id !== action.like.user_id);
            return newState;
        case RECEIVE_ALL_POSTS:
            return merge({}, action.posts);
        case RECEIVE_POST:
            return merge({}, oldState, { [action.post.id]: action.post });
        case REMOVE_POST:
            
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
}

export default PostsReducer;