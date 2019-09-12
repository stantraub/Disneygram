import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import UserShow from "./user_show";

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({

})

export default withRouter(connect(msp, mdp)(UserShow));