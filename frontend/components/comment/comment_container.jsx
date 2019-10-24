import React from 'react'
import { connect } from 'react-redux';
import Comment from './comment';
import { withRouter } from 'react-router-dom';
import { createComment, fetchComments, deleteComment} from "../../actions/comment_actions";

const msp = (state, ownProps) => {
   
    let postId = ownProps.postId;
    let currentUserId = state.session.id;
    let comment = {
        body: '',
        author_id: currentUserId,
        post_id : postId
    }
    // debugger
    return ({
        comment
    })

}

const mdp = dispatch => {
    
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        fetchComments: () => dispatch(fetchComments())
    })
}

export default withRouter(connect(msp, mdp)(Comment));
