import React from 'react';
import { connect } from 'react-redux';
import sessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions";
import { withRouter } from "react-router";


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    user: state.entities.users[ownProps.match.params.id],
    formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        processDemo: (demoUser) => dispatch(login(demoUser))
    })

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sessionForm));