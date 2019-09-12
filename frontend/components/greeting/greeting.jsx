import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from "../session/session_form_container";

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        // logged in
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}> Logout</button>
        </div>
    ) : (
            // not logged in
            <div>
                {/* <Link className="btn" to="/signup">Sign up</Link>
                &nbsp;
                <Link className="btn" to="/login">Log in</Link> */}
                <SignupFormContainer />
            </div>
        );

    return (
        <header className="greeting">
            {/* <h1 className="logo">Disneygram</h1> */}
            <div>
                {display}
            </div>
        </header>
    )

};
