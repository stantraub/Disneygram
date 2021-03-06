import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
// import { fetchPost } from '../../actions/post_actions';
import Like from './like';

const msp = (state, ownProps) => {
    // console.log(state.entities.posts)
    // console.log(ownProps);
    let postId = ownProps.postId;
    return ({
       currentUser: state.entities.users[state.session.id],
       post: ownProps.post,
       postId
    })
}

const mdp = dispatch => ({
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchPost: (id) => dispatch(fetchPost(id))
})

export default connect(msp, mdp)(Like);