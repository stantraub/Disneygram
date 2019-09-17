import React from "react";
import { Link } from "react-router-dom";
import UserShowContainer from "./user_show_container";
import NavBarContainer from "../navbar/navbar_container";
// import PostIndexContainer from "../post/post_index_container";

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
        // console.log(this.props.user);
        // console.log(this.props.posts);
        return(
        <div className="main-div">
            {/* <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button> */}
            
            <div className="user-top">
                <header className="user-header">
                    <div className="profile-pic-div">
                            <img className="profile-pic-img" src={this.props.user.profile_pic} />
                    </div>
                    <section>
                        <div className="user-information">
                            <h1>{this.props.user.username}</h1>
                            <button className="user-show-btn">Edit Bio</button>
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
                        </div>
                    </section>
                    
                        
                
                </header>

                <div>

                    {this.props.posts && this.props.post.map( post => {
                        return (
                            
                            <Link key={post.id} to={`/users/${this.props.user.id}/${post.id}`}>
                                <div key={post.id} className='post'>
                                    <img  src={post.photo} />
                    

                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>

        </div>
        )
    }
        

}

export default UserShow;