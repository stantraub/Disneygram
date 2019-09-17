import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img className="post-header-img" src={post.profile_pic}/>
          <Link to={`/users/${post.user_id}`} className="username-link">{post.user.username}</Link>
        </div>
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
