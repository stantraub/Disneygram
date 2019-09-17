import * as APIUtil from "../util/post_api_util";

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

export const fetchPosts = () => dispatch => {
    return APIUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
}

export const fetchPost = (id) => dispatch => {
    return APIUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
}

export const createPost = (post) => dispatch => {
    return APIUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
}

export const updatePost = (post) => dispatch => {
    return APIUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))
}

export const deletePost = (postId) => dispatch => {
    return APIUtil.deletePost(postId)
        .then(post => dispatch(removePost(post)))
}
