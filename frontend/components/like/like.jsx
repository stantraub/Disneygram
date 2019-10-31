import React from 'react';

class Like extends React.Component {
    constructor(props){
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
        // this.state = this.props.post;
        // this.state = { like: false }
    }

    // componentDidUpdate(prevProps){
    //     debugger;
    //     console.log(prevProps.post.likers.length);
    //     console.log(this.state.likers.length);
    //     if (this.state.likers !== prevProps.post.likers) {
    //         this.fetchPost(this.state.id);
    //     }
    // }

    handleLike(e){
        e.preventDefault();
        // this.setState({like: true})
        // console.log(this.props);
        this.props.createLike({post_id: this.props.post.id})
        // this.forceUpdate()
        //     .then(() => { this.props.fetchPost(this.props.post.id)}
        // )
            
    }

    handleUnlike(e){
        e.preventDefault();
        // this.setState({ like: false })
        // console.log("I am unliked :(")
        this.props.deleteLike(this.props.post.id)
        // this.forceUpdate()
            // .then(() => { this.props.fetchPost(this.props.post.id)}
        // )
    }
        

    render() {
        // debugger
        return (
            <div className="like-btn">

                {(this.props.post.likes.filter(liker => liker.user_id === this.props.currentUser.id).length === 0) 
        //user_id
                ?
    
                    (
                      
                        <div className="liked" onClick={this.handleLike}>
                            <span >&#9825;</span>
                        </div>
                        
                    ): 
                    
                    (
                        <div className="unliked" onClick={this.handleUnlike}>
                            <span>&#9829;</span>
                        </div>

                    )}
                
            </div>
        )
    }
}

export default Like;