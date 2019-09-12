import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

    let display;
    console.log(currentUser)
    if (currentUser) {
        display = (
            <nav>
                <h2>{currentUser.username}</h2>
                <button onClick={() => logout()}>Log Out</button>
            </nav>
        );
    } else {
        display = (
            <nav>

            </nav>
        );
    }
    return display;
};
