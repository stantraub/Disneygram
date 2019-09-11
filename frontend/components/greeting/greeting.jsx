import React from 'react';
import { Link } from 'react-router-dom';

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
                &nbsp; or &nbsp;
                <Link className="btn" to="/login">Log in</Link> */}
            </div>
        );

    return (
        <header className="greeting">
            {/* <h1 className="logo">LOGO</h1> */}
            <div>
                {display}
            </div>
        </header>
    )

};
