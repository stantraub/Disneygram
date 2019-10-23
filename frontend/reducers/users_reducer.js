import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

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
        // case RECEIVE_FOLLOW:
        //     debugger
        default:
            return state;
    }

}

export default userReducer;