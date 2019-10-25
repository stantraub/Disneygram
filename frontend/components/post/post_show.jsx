import React from 'react';

class PostShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h1>hi</h1>
                {/* <img className='post-show-image' src={this.props.post.photo} /> */}
            </div>
        )
    }
}

export default PostShow;