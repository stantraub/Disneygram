import React from 'react';

class PostShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        return(
            <div><img className='post-show-image' src={this.props.post.photo} /></div>
        )
    }
}

export default PostShow;