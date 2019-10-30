import React from "react";
import { Link } from "react-router-dom";
import UserShowContainer from "./user_show_container";
import NavBarContainer from "../navbar/navbar_container";
import FollowContainer from "../follow/follow_container";
import { openModal } from '../../actions/modal_actions';
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

        if (this.props.user.id === this.props.currentUserId) {
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
                                <button onClick={() => this.props.openModal('edit')}className="user-show-btn">Edit Profile</button>
                                <button onClick={() => this.props.openModal('upload')} className="user-show-btn">Upload</button>
                            </div>
                        
                            <div className="follows">
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.posts).length} &nbsp;</div> posts</div>
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.followers).length} &nbsp;</div> followers</div>
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.follows).length} &nbsp;</div> following</div>
                                    {/* <div className="follow-stats"><div className="stat">0 &nbsp;</div> following</div> */}
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
                        {this.props.user.posts && Object.values(this.props.user.posts).reverse().map( post => {
                            return(
                                <div key={post.id} className="post-user-show" onClick={() => this.props.openShowModal('show', post)} >
                                    <img width="293px" height="293px" src={post.photo}  />
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>

            </div>
            );
        } else if (this.props.user.id !== this.props.currentUserId) {
            return (
                <div className="main-div">
                    <div className="user-top">
                        <header className="user-header">
                            <div className="profile-pic-div">
                                <img className="profile-pic-img" src={this.props.user.profile_pic} />
                            </div>
                            <section>
                                {/* <div className="user-information">
                                    <h1>{this.props.user.username}</h1> */}
                                    <FollowContainer user={this.props.user} follows={this.props.follows}/>
                                {/* </div> */}

                                <div className="follows">
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.posts).length} &nbsp;</div> posts</div>
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.followers).length} &nbsp;</div> followers</div>
                                    <div className="follow-stats"><div className="stat">{Object.values(this.props.user.follows).length} &nbsp;</div> following</div>
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
                                {this.props.user.posts && Object.values(this.props.user.posts).reverse().map(post => {
                                    return (
                                        <div key={post.id} className="post-user-show" onClick={() => this.props.openShowModal('show', post)}>
                                            <img  width="293px" height="293px" src={post.photo} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    }
        

}

export default UserShow;