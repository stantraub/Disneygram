import { connect } from 'react-redux';
import EditProfile from './edit_profile';
import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    let user = state.entities.users[state.session.id];

    return ({
        user
    })
}

const mdp = (dispatch) => {
    return ({
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(msp, mdp)(EditProfile));