import * as APIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = ({ user, posts}) => ({
    type: RECEIVE_USER,
    user,
    posts
})

export const fetchUsers = () => {
    return APIUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUser = (id) => {
    return APIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
}

export const updateUser = (user) => {
    return APIUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}