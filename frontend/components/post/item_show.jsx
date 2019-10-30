import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../like/like_container';
import CommentContainer from '../comment/comment_container';


class ItemShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    componentDidMount() {
        this.props.fetchPost(this.props.post.id);
    }

    renderComments(post) {
        if (post.comments) {
            return (
                post.comments.map(comment => {
                    return (
                        <div key={comment.id} className="post-comment-item">
                            <Link to={`/users/${post.author_id}`}><img className="post-header-img" src={comment.profile_pic} /></Link>
                            &nbsp;
                            &nbsp;
                            <Link to={`/users/${comment.author_id}`} className="username-link">
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
        console.log(this.props)
        return (
            <div className='post-show-modal'>
                <div>
                    <img className="post-show-img" src={this.props.post.photoUrl} />
                </div>
                <div className="post-show-side-wrapper">
                    <div>
                        <div className="post-show-user-info">
                            <Link to={`/users/${this.props.post.author_id}`}><img className="post-header-img" src={this.props.post.profile_pic} /></Link>
                            &nbsp;
                            &nbsp;
                            <Link to={`/users/${this.props.post.author_id}`} className="post-show-username">{this.props.post.user.username}</Link>
                        </div>
                        <div className="post-show-comments">
                            {this.renderComments(this.props.post)}
                        </div>
                    </div>
                    <div className="post-likes-comments-wrapper">
                        <section className="post-likes-comments">
                            <button className="post-button">
                                <LikeContainer post={this.props.post} />
                            </button>
                            <button className="post-button">
                                <img className="comment-icon" src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
                            </button>

                        </section>
                        <section>
                            <div className="post-num-likes">
                                {this.props.post.likes.length} likes
                            </div>
                        </section>
                        <CommentContainer postId={this.props.post.id} post={this.props.post} />
                    </div>
                    {/* <div className="comments"> */}

                    {/* </div> */}
                </div>
                {/* <img className='post-show-image' src={this.props.post.photo} /> */}
            </div>
        )
    }
}

export default ItemShow;