import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from "../session/session_form_container";
import UserShowContainer from "../user_profile/user_show_container";

export default ({ currentUser, logout }) => {

    const display = currentUser ? (
        // logged in
        <nav>
            <div className="main-navbar">
                {/* <Link to={`/`}>
                    <img className="Icon" src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png" alt="" />
                </Link> */}
                <div className="nav-left">
                    <Link to={`/feed`} >
                    <img className="castle-logo" src="https://images-na.ssl-images-amazon.com/images/I/61ANd%2BEXorL._SX466_.jpg" />
                    </Link>
                    <Link to={`/feed`} className="disneygram-link" >
                    <div className="main-navbar-logo">Disneygram</div>
                    </Link>
                </div>
                {/* <div className="search-bar">
                    <input type="search" className="search-bar-input" placeholder="Search"/>
                </div> */}
                <div className="nav-right">
                    <button onClick={logout} className="nav-right-button">Logout</button>
                    <Link to={`/users/${currentUser.id}`}>
                        <img className="user-icon" src="https://cdn2.iconfinder.com/data/icons/instagram-17/32/8-user-512.png"></img>
                    </Link> 
                </div>
            </div>
        </nav>
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
