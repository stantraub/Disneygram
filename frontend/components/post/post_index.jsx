import React from 'react';
import PostIndexItem from './post_item';


class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
        // this.props.fetchUser(this.props.id);
    }

    render() {
        // console.log(this.props.posts);

        return (
            <div className="post-index-all">
                {this.props.posts && this.props.posts.slice(0).reverse().map(post => 
                    <PostIndexItem
                        key={post.id}
                        post={post}
                        deletePost={this.props.deletePost}
                     />
                    )}
            </div>
        );
    }
}

export default PostIndex;