import React from 'react';

class PostShow extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.postId);
    // }

    render() {
        console.log(this.props);
        return(
            <div className='post-show-modal'>
                <div className="post-img">
                    <img className="post-img" src={this.props.post.photo} />
                </div>
                {/* <img className='post-show-image' src={this.props.post.photo} /> */}
            </div>
        )
    }
}

export default PostShow;