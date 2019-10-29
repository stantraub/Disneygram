import React from 'react';
import { fetchComments } from '../../actions/comment_actions';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.comment);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

  

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }


    handleSubmit(e) {

        e.preventDefault();
        // console.log(this.state)
        this.props.createComment(this.state).then(() => this.setState({ body: '' }));
    }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

    
    render() {
        let { post } = this.props
        // console.log(post);
        // console.log(this.props)
        return (
            <div className="comments">
                {/* <div className="comment-div"> */}
                    {/* <form className="comment-form">  */}
                        <input className="comment-input" placeholder="Add a comment..." value={this.state.body} onChange={this.update("body")}></input>
                        <button onClick={this.handleSubmit.bind(this)} className="post-comment-btn" type="submit">Post</button>
                    {/* </form> */}
                {/* </div> */}
            </div>
         
        )
    }
}

export default Comment;