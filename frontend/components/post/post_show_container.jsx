import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { withRouter } from 'react-router-dom';
import { fetchPost, fetchPosts} from '../../actions/post_actions';

const msp = (state, ownProps) => {
   
    let userId = state.session.id;
    let postId = ownProps.postId;
    console.log(ownProps)
    // debugger
    return({
        userId: userId,
        postId: postId
    })
}

const mdp = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id))
})

export default withRouter(connect(msp, mdp)(PostShow))