import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { withRouter } from 'react-router-dom';
import { fetchPost, fetchPosts} from '../../actions/post_actions';

const msp = (state, ownProps) => {
   
    let post = ownProps.post;
    let user = state.entities.users[post.author_id]
    let modalPost = state.ui.modal.post;
    // let post = Object.values(state.entities.users)[0].posts[postId]
    // console.log(ownProps)
    // debugger
    return({
        post: post,
        user: user,
        modalPost: modalPost
    })
}

const mdp = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    createComment: comment => dispatch(createComment(comment))
})

export default withRouter(connect(msp, mdp)(PostShow))