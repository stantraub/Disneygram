import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import LikesReducer from "./likes_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
});

export default entitiesReducer;