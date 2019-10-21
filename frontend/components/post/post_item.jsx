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

  // handleSubmit(e) {
  //   // debugger

  //   e.preventDefault();
  //   // console.log(this.state)
  //   this.props.createComment(this.state).then(() => this.setState({ body: '' }));
  // }


  // componentDidUpdate(prevProps){
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  renderComments(post) {
    // debugger
    if (post.comments) {
      return (
        post.comments.map(comment => {
          // debugger
          return (
            <div key={comment.id} className='feed-comment-list'>
              <ul key={comment.id}>
                <li key={comment.id}>
                  <Link to={`/users/${comment.user_id}`}><span>{comment.username} </span></Link>
                  <span>{comment.body}</span>
                </li>
              </ul>
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
    return (
      <div className="post">
        <div className="post-header">
          <div className="post-user-info">
            <Link to={`/users/${this.props.post.user.id}`}><img className="post-header-img" src={this.props.post.profile_pic} /></Link>
            &nbsp;
            &nbsp;
          <Link to={`/users/${this.props.post.user.id}`} className="username-link">{this.props.post.user.username}</Link>
          </div>
        </div>
        <div className="post-img"><img className="post-img" src={this.props.post.photoUrl} /></div>

        <div className="post-body">
          <section className="likes-comments">
            <button className="post-button">
              {/* <img className="like" src="https://www.fourjay.org/myphoto/s/57/575755_instagram-icon-png-transparent-background.png"/> */}
              <LikeContainer post={this.props.post} />
            </button>
            <button className="post-button">
              <img className="comment-icon" src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
            </button>

          </section>
          <section>
            {/* <span></span> */}
            <div className="num-likes">{this.props.post.likes.length} likes</div>
          </section>
          <div className="post-body-div">
            <Link to={`/users/${this.props.post.user.id}`} className="username-link"><p className="post-body-username">{this.props.post.user.username}</p></Link>
            <p className="post-body-description"> {this.props.post.body}</p>
            <p className="post-body-description"> {this.props.post.comments}</p>
          </div>
          <div className="comments">
            <div>{this.renderComments(this.props.post)}</div>
            <CommentContainer postId={this.props.post.id} post={this.props.post} />
          </div>


        </div>
      </div>
    );
  }
}
// const PostIndexItem = ({ post, deletePost }) => {

//   return (
//     <div className="post">
//       <div className="post-header">
//         <div className="post-user-info">
//           <Link to={`/users/${post.user.id}`}><img className="post-header-img" src={post.profile_pic} /></Link>
//           &nbsp;
//           &nbsp;
//           <Link to={`/users/${post.user.id}`} className="username-link">{post.user.username}</Link>
//         </div>
//       </div>
//       <div className="post-img"><img className="post-img" src={post.photoUrl} /></div>

//       <div className="post-body">
//         <section className="likes-comments">
//           <button className="post-button">
//             {/* <img className="like" src="https://www.fourjay.org/myphoto/s/57/575755_instagram-icon-png-transparent-background.png"/> */}
//             <LikeContainer post={post} />
//           </button>
//           <button className="post-button">
//             <img className="comment-icon" src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
//           </button>
          
//         </section>
//         <section>
//           {/* <span></span> */}
//           <div className="num-likes">{post.likers.length} likes</div>
//         </section>
//         <div className="post-body-div">
//           <Link to={`/users/${post.user.id}`} className="username-link"><p className="post-body-username">{post.user.username}</p></Link>
//           <p className="post-body-description"> {post.body}</p>
//         </div>
//         <div className="comments">
//           <div className="comment-div">
//             <form className="comment-form">
//               <input className="comment-input" placeholder="Add a comment..."></input>
//               <button className="post-comment-btn" type="submit">Post</button>
//             </form>
//           </div>
//         </div>

        
//       </div>
//     </div>
//     );
// };

export default PostIndexItem;
