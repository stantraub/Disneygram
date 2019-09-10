import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
    const display = currentUser ? (
        // logged in
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logoutUser}> Logout</button>
        </div>
    ) : (
            // not logged in
            <div>
                <Link className="btn" to="/signup">Sign up</Link>
                <Link className="btn" to="/login">Log in</Link>
            </div>
        );

    return (
        <header className="greeting">
            <h1 className="logo">LOGO</h1>
            <div>
                {display}
            </div>
        </header>
    )

};
