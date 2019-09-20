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
        if (!this.props.user) {
            return null
        }
        return(
        <div className="main-div"> 
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
                                <div className="follow-stats"><div className="stat">{Object.values(this.props.user.posts).length} &nbsp;</div> posts</div>
                                <div className="follow-stats"><div className="stat">0 &nbsp;</div> followers</div>
                                <div className="follow-stats"><div className="stat">0 &nbsp;</div> following</div>
                        </div>
                    
                        <div className="user-name-bio">
                            <h1 className="full-name">{this.props.user.full_name}</h1>
                            <span>{this.props.user.bio}</span>
                        </div>
                    </section>
                    
                        
                
                </header>

                {/* <div className="post-start"></div> */}

                <div className="user-posts-div">
                    <div className="user-posts">
                    {this.props.user.posts && Object.values(this.props.user.posts).map( post => {
                        return(
                            <div key={post.id} className="post" >
                                <img width="293px" height="293px" src={post.photo} />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>

        </div>
        )
    }
        

}

export default UserShow;