import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <Link to={`/users/${post.user.id}`}><img className="post-header-img" src={post.profile_pic} /></Link>
          &nbsp;
          &nbsp;
          <Link to={`/users/${post.user.id}`} className="username-link">{post.user.username}</Link>
        </div>
      </div>
      <div className="post-img"><img className="post-img" src={post.photoUrl} /></div>

      <div className="post-body">
        <section className="likes-comments">
          <button className="post-button">
            <img className="like" src="https://www.fourjay.org/myphoto/s/57/575755_instagram-icon-png-transparent-background.png"/>
          </button>
          <button className="post-button">
            <img className="comment-icon" src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
          </button>
        </section>
        <section>
          <div className="num-likes">2 likes</div>
        </section>
        <div className="post-body-div">
          <Link to={`/users/${post.user.id}`} className="username-link"><p className="post-body-username">{post.user.username}</p></Link>
          <p className="post-body-description"> {post.body}</p>
        </div>
        <div className="comments">
          <div className="comment-div">
            <form className="comment-form">
              <input className="comment-input" placeholder="Add a comment..."></input>
              <button className="post-comment-btn" type="submit">Post</button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
    );
};

export default PostIndexItem;
