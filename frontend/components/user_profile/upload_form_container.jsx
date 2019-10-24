import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    let currentUserId = state.session.id;
    let post = {
        body: '',
        user_id: currentUserId
    }

    return({
        post
    })
}

const mdp = (dispatch) => {
    return({
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(msp, mdp)(UploadForm));