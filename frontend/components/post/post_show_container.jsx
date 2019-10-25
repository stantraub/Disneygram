import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { withRouter } from 'react-router-dom';
import { fetchPost, fetchPosts} from '../../actions/post_actions';

const msp = (state, ownProps) => {
   
    let post = ownProps.post;
    // let post = Object.values(state.entities.users)[0].posts[postId]
    // console.log(ownProps)
    debugger
    return({
        post: post
    })
}

const mdp = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id))
})

export default withRouter(connect(msp, mdp)(PostShow))