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
        console.log(this.props);
        this.props.createLike({post_id: this.props.post.id})
        // this.forceUpdate()
        //     .then(() => { this.props.fetchPost(this.props.post.id)}
        // )
            
    }

    handleUnlike(e){
        e.preventDefault();
        // this.setState({ like: false })
        console.log("I am unliked :(")
        this.props.deleteLike(this.props.post.id)
        // this.forceUpdate()
            // .then(() => { this.props.fetchPost(this.props.post.id)}
        // )
    }
        

    render() {
        // debugger
        return (
            <div>

                {(this.props.post.likes.filter(liker => liker.user_id === this.props.currentUser.id).length === 0) 
        //user_id
                ?
    
                    (
                      
                        <div>
                            <img onClick={this.handleLike} className="liked" src="https://www.fourjay.org/myphoto/s/57/575755_instagram-icon-png-transparent-background.png" />
                        </div>
                        
                    ): 
                    
                    (
                        <div>
                            
                            <img onClick={this.handleUnlike} className="unliked" src="https://apprecs.org/ios/images/app-icons/256/62/1185229666.jpg" />
                        </div>

                    )}
                
            </div>
        )
    }
}

export default Like;