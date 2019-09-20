import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../like/like_container';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

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
            <div className="num-likes">{this.props.post.likers.length} likes</div>
          </section>
          <div className="post-body-div">
            <Link to={`/users/${this.props.post.user.id}`} className="username-link"><p className="post-body-username">{this.props.post.user.username}</p></Link>
            <p className="post-body-description"> {this.props.post.body}</p>
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
