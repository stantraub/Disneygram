import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost} from '../../actions/post_actions';
import { openModal, openShowModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
    return({
        posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    })

}
   


const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id)),
    openShowModal: (modal, post) => dispatch(openShowModal(modal, post))
    // fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
