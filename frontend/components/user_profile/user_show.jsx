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
            <div className="user-information">
                <div>
                    <h1>{this.props.users}</h1>
                    
                    <button className="user-show-btn">Edit Profile</button>
                    <button onClick={this.handleLogout} className="user-show-btn">Log Out</button>
                    <button className="user-show-btn">Upload</button>
                </div>
                
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    
                </div>
                
                <div>
                    
                    {/* Full Name is a placeholder for now */}
                    <h2></h2>
                    {/* <p>{this.props.user.bio}</p> */}
                </div>
            </div>

        </div>
        )
    }
        

}

export default UserShow;