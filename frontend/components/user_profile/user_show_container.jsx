import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import UserShow from "./user_show";


const msp = (state, ownProps) => {
    console.log(state.entities.follows)
    // let currentSession = state.session.id;
    return({
        user: state.entities.users[ownProps.match.params.id],
        currentUserId: state.entities.users[state.session.id].id,
        follows: state.entities.follows
        // currentSession
    })
    
}

const mdp = dispatch => ({
    action: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(msp, mdp)(UserShow));