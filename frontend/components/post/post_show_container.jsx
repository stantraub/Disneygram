import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { withRouter } from 'react-router-dom';
import { fetchPost, fetchPosts} from '../../actions/post_actions';

const msp = (state, ownProps) => {
    let userId = ownProps.match.params.id;
    let postId = ownProps.match.params.postId;
    return({
        userId: userId,
        post: state.entities.posts[postId]
    })
}

const mdp = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id))
})

export default withRouter(connect(msp, mdp)(PostShow))