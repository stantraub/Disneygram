import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from "../session/session_form_container";
import UserShowContainer from "../user_profile/user_show_container";

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        // logged in
        <div>
            {/* <h3>Welcome {currentUser.username}!</h3> */}
            <button onClick={logout}>Logout</button>
            {/* <UserShowContainer /> */}
            {/* <Link to={`/users/${currentUser.id}`}>my profile</Link> */}
        </div>
    ) : (
            // not logged in
            <div>
                {/* <Link className="btn" to="/signup">Sign up</Link>
                &nbsp;
                <Link className="btn" to="/login">Log in</Link> */}
                {/* <SignupFormContainer /> */}
            </div>
        );

    return (
            <div>
                {display}
            </div>
    )

};
