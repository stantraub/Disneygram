import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    renderComments() {
        let { post } = this.props
        console.log(post);
        // if (post.comments) {
            
        // }
    }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

    render() {
        let { post } = this.props
        console.log(post);
        // console.log(this.props)
        return (
            <div>

            </div>
        )
    }
}

export default Comment;