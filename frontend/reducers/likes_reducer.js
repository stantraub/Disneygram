// import {
//     RECEIVE_LIKE,
//     REMOVE_LIKE
// } from "../actions/like_actions";
// import merge from 'lodash/merge';

// const LikesReducer = (oldState ={}, action) => {
//     Object.freeze(oldState);
//     let newState = merge({}, oldState);
//     switch (action.type) {
//         case RECEIVE_LIKE:
//             // console.log(newState);
//             newState.likers.push(action.like)
//             return newState
//             // return merge({}, oldState, { [action.like.id]: action.likers });
//         case REMOVE_LIKE:
//             // console.log(newState);
//             delete newState[action.likeId];
//             return newState;
//         default:
//             return oldState;
//     }
// }

// export default LikesReducer;