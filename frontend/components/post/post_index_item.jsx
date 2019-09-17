import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-img"></div>
        <Link to={`/users/${post.user_id}`} className="username-link">{post.user.username}</Link>
      </div>
      <div className="post-img"><img className="post-img" src={post.photoUrl} /></div>
      <div className="post-body">
        <div className="post-body-username">{post.user.username} </div>

        <p className="post-body-description"> {post.body}</p>
      </div>
    </div>
    );
};

export default PostIndexItem;
