import React from 'react';

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
        // debugger

        e.preventDefault();
        // console.log(this.state)
        this.props.createComment(this.state).then(() => this.setState({ body: '' }));
    }

    // componentDidMount() {
    //     this.props.fetchComments();
    // }

    
    render() {
        let { post } = this.props
        console.log(post);
        // console.log(this.props)
        return (
            <div>
                <div className="comment-div">

                    <form className="comment-form">
                        <input className="comment-input" placeholder="Add a comment..." value={this.state.body} onChange={this.update("body")}></input>
                        <button onClick={this.handleSubmit} className="post-comment-btn" type="submit">Post</button>
                    </form>
                </div>
            </div>
         
        )
    }
}

export default Comment;