import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    renderComments() {
        console.log(post.comments)
        // if (post.comments) {
            
        // }
    }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="comment-div">

                    <form className="comment-form">
                        <input className="comment-input" placeholder="Add a comment..."></input>
                        <button className="post-comment-btn" type="submit">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comment;