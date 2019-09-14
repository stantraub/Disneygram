import React from "react";
import { Link } from "react-router-dom";
import UserShowContainer from "./user_show_container";

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/signup'));
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id);
    }

    render(){
        console.log(this.props.user);
        return(
        <div className="main-div">
            {/* <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button> */}
            <div className="user-top">
                <div className="user-stats">
                    <div className="user-information">
                        <h1>{this.props.user.username}</h1>
                        <button className="user-show-btn">Edit Bio</button>
                        <button onClick={this.handleLogout} className="user-show-btn">Log Out</button>
                        <button className="user-show-btn">Upload</button>
                    </div>
                    
                    <div className="follows">
                        <div className="follow-stats">0 posts</div>
                        <div className="follow-stats">0 followers</div>
                        <div className="follow-stats">0 following</div>
                    </div>
                    
                    <div className="user-name-bio">
                        <h1 className="full-name">{this.props.user.full_name}</h1>
                        <span>{this.props.user.bio}</span>

                        {/* Full Name is a placeholder for now */}
                    </div>
                    
                        
                
                </div>
            </div>

        </div>
        )
    }
        

}

export default UserShow;