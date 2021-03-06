import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        // this.update = this.update.bind(this);
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchFollows();
    }

    handleFollow(e) {
        // console.log(this.props.currentUser.id)
        // debugger
        // if (this.props.profile.hasFollowed) {
        //     // debugger
        //     this.props.deleteFollow(this.props.profile.id)
        // } else {
        //    console.log(this.props)
        this.props.createFollow({follower_id: this.props.currentUser.id, following_id: this.props.user.id})
            // this.forceUpdate()
        //     .then(() => { this.props.fetchPost(this.props.post.id)}
        // )
        // }
    }

    handleUnfollow(e) {
    //    debugger

        
        this.props.deleteFollow(Object.values(this.props.follows).filter(follow => follow.follower_id === this.props.currentUser.id && follow.following_id === this.props.userId)[0].id);
     
        // this.props.fetchFollows();
    }



    render() {
        console.log(this.props)
        let hasFollowed;

        this.props.user.followers.forEach(follower => {
            if (follower.follower_id === this.props.currentUser.id) {
                hasFollowed = true;
            } else {
                hasFollowed = false;
            }
        });
        // if (this.props.user.followers) {
            
        // }
        if (!hasFollowed) {
            return (
                <div className="user-information">
                    <h1>{this.props.user.username}</h1>
                    <button onClick={this.handleFollow} className="follow-btn">Follow</button>
                </div>

            )
        } else {
            return (
                <div className="user-information">
                    <h1>{this.props.user.username}</h1>
                    <button onClick={this.handleUnfollow} className="follow-btn">Unfollow</button>
                </div>

            )
        }
        
    }
}

export default Follow;