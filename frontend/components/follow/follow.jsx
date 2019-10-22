import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        // this.update = this.update.bind(this);
    }

    handleFollow(e) {
        e.preventDefault();
        debugger
        // if (this.props.profile.hasFollowed) {
        //     // debugger
        //     this.props.deleteFollow(this.props.profile.id)
        // } else {
            this.props.createFollow(this.props.user.id)
        // }
    }



    // update(field) {
    //     return e => this.setState({
    //         [field]: e.target.value
    //     })
    // }


    render() {
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.handleFollow} className="user-show-btn">Follow</button>
            </div>

        )
    }
}

export default Follow;