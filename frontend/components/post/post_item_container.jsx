import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import PostIndexItem from './feed_item';
import { closeModal, openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    let comments;
    // if (state.entities.comments) {
    //     comments = Object.values(state.entities.comments)
    // }
    return ({
        currentUser,
        comments: Object.values(state.entities.comments)
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPost: id => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
        fetchComments: postId => dispatch(fetchComments(postId)),
        deleteComment: id => dispatch(deleteComment(id)),
        createComment: comment => dispatch(createComment(comment)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem)