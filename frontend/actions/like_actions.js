import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})

export const createLike = like => dispatch => {
    return APIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = likeId => dispatch => {
    return APIUtil.deleteLike(likeId)
        .then(like => dispatch(removeLike(like)))
}
