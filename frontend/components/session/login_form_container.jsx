import React from 'react';
import { connect } from 'react-redux';
import loginForm from "./login_form";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: "login"
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        login: (user) => dispatch(login(user)),
        processDemo: (demoUser) => dispatch(login(demoUser))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);