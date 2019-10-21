import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost} from '../../actions/post_actions';


const mapStateToProps = state => {
    return({
        posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    })

}
   


const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
    // fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
