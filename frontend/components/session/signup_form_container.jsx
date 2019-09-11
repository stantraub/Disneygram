import React from 'react';
import { connect } from 'react-redux';
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => (
        dispatch(signup(user))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);