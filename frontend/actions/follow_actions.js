import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW= 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW= 'REMOVE_FOLLOW';
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS'; 

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow: follow
})

const removeFollow = follow => {
    return {
        type: REMOVE_FOLLOW,
        followId: follow.id
    };
};

const receiveAllFollows = (follows) => ({
    type: RECEIVE_ALL_FOLLOWS,
    follows: follows
})

export const createFollow = (follow) => dispatch => {
    return (
        FollowAPIUtil.createFollow(follow)
            .then(follow => dispatch(receiveFollow(follow)))
    )
}

export const fetchFollows = () => dispatch => (
    FollowAPIUtil.fetchFollows()
        .then(follows => dispatch(receiveAllFollows(follows)))
)

export const deleteFollow = (followId) => dispatch => (
    FollowAPIUtil.deleteFollow(followId)
        .then(follow => dispatch(removeFollow(follow)))
)
