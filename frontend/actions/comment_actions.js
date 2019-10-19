import * as CommentAPIUtil from '../util/comment_api_util';
import { REMOVE_LIKE } from './like_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
})

const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        commentId: comment.id
    };
};

const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments: comments
})

export const createComment = (comment) => dispatch (
    CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
)

export const fetchComments = (comments) => dispatch => (
    CommentAPIUtil.fetchComments(comments)
        .then(comments => dispatch(receiveAllComments(comments)))
)

export const deleteComment = (commentId) => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
)

