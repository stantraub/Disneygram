import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import PostIndexItem from './feed_item';
import { openModal, openShowModal } from '../../actions/modal_actions';
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
        fetchUser: id => dispatch(fetchUser(id)),
        deletePost: id => dispatch(deletePost(id)),
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: id => dispatch(deleteComment(id)),
        createComment: comment => dispatch(createComment(comment)),
        openShowModal: (modal, post) => dispatch(openShowModal(modal, post))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndexItem));