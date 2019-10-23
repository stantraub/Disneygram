import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        // this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchFollows();
    }

    handleFollow(e) {
        // console.log(this.props.currentUser.id)
        // debugger
        // if (this.props.profile.hasFollowed) {
        //     // debugger
        //     this.props.deleteFollow(this.props.profile.id)
        // } else {
            this.props.createFollow({follower_id:this.props.currentUser.id, following_id: this.props.user.id})
        // }
    }



    // update(field) {
    //     return e => this.setState({
    //         [field]: e.target.value
    //     })
    // }


    render() {
        console.log(this.props)
        return (
            <div className="user-information">
                <h1>{this.props.user.username}</h1>
                <button onClick={this.handleFollow} className="follow-btn">Follow</button>
            </div>

        )
    }
}

export default Follow;