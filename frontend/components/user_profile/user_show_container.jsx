import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import UserShow from "./user_show";


const msp = (state, ownProps) => {
    let currentSession = state.session.id;
    return({
        user: state.entities.users[ownProps.match.params.id],
        currentSession
    })
    
}

const mdp = dispatch => ({
    action: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default withRouter(connect(msp, mdp)(UserShow));