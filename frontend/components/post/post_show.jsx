import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.postId);
    // }

    renderComments(post) {
        // debugger
        if (this.props.user.posts.comments) {
            return (
                this.props.user.post.comments.map(comment => {
                    // debugger
                    return (
                        <div key={comment.id} className="comment-item">
                            <Link to={`/users/${comment.user_id}`} className="username-link">
                                <span className="post-body-username">{comment.username} </span>
                            </Link>
                            <span>{comment.body}</span>
                        </div>
                    )

                })
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        console.log(this.props);
        // debugger
        return(
            <div className='post-show-modal'>
                <div>
                    <img className="post-show-img" src={this.props.post.photo} />
                </div>
                <div className="post-show-side-wrapper">
                    <div className="post-show-user-info">
                        <Link to={`/users/${this.props.post.author_id}`}><img className="post-header-img" src={this.props.user.profile_pic} /></Link>
                        &nbsp;
                        &nbsp;
                        <Link to={`/users/${this.props.post.author_id}`} className="post-show-username">{this.props.user.username}</Link>
                    </div>
                    <div className="post-comments-div">
                        {this.renderComments(this.props.post)}
                    </div>
                </div>
                {/* <img className='post-show-image' src={this.props.post.photo} /> */}
            </div>
        )
    }
}

export default PostShow;