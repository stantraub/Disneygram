import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../like/like_container';
import CommentContainer from '../comment/comment_container';


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: ''
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }



  renderComments(post) {
    // debugger
    if (post.comments) {
      return (
        post.comments.map(comment => {
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

  render(){
    console.log(this.props)
    return (
      <div className="post">
        <div className="post-header">
          <div className="post-user-info">
            <Link to={`/users/${this.props.post.author_id}`}><img className="post-header-img" src={this.props.post.profile_pic} /></Link>
            &nbsp;
            &nbsp;
          <Link to={`/users/${this.props.post.author_id}`} className="username-link">{this.props.post.user.username}</Link>
          </div>
        </div>
        <div className="post-img"><img onClick={() => this.props.openShowModal('index', this.props.post)} className="post-img" src={this.props.post.photoUrl} /></div>

        <div className="post-body">
          <section className="likes-comments">
            <button className="post-button">
              {/* <img className="like" src="https://www.fourjay.org/myphoto/s/57/575755_instagram-icon-png-transparent-background.png"/> */}
              <LikeContainer post={this.props.post} />
            </button>
            <button className="post-button">
              <img onClick={() => this.props.openShowModal('index', this.props.post)} className="comment-icon" src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
            </button>

          </section>
          <section>
            {/* <span></span> */}
            <div className="num-likes">{this.props.post.likes.length} likes</div>
          </section>
          <div className="post-body-div">
            <Link to={`/users/${this.props.post.user.id}`} className="username-link"><p className="post-body-username">{this.props.post.user.username}</p></Link>
            <p className="post-body-description"> {this.props.post.body}</p>
            {/* <p className="post-body-description"> {this.props.post.comments}</p> */}
            
            
          </div>
          <div className="post-comments-div">
            {this.renderComments(this.props.post)}
          </div>
          {/* <div > */}
            <CommentContainer postId={this.props.post.id} post={this.props.post} />
          {/* </div> */}

        </div>
      </div>
    );
  }
}

export default PostIndexItem;
