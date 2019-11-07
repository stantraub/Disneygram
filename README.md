# [Disneygram](http://disneygram.herokuapp.com/)

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/login-page.png)

## Background and Overview

Disneygram is an Instagram clone with a Disney-inspired twist. Users in the Disney universe are able to create accounts, login/logout, and view pictures. 

Features cloned from Instagram include:

- User authentication
- Feed
- User Profile with picture grid layout
- Follows
- Post show modals on feed and user profile pages
- Posting capability and profile editing
- Likes
- Comments

## Demo

https://disneygram.herokuapp.com

## Technologies 
- Ruby on Rails
- React
- Redux
- AWS S3
- Webpack
- JSON
- Jbuilder
- HTML/CSS
- NPM
- PostgreSQL

Disneygram's backend utilizes Ruby on Rails and PostgreSQL, allowing database queries to get executed efficiently through RESTful API routes. I used Jbuilder to render JSON objects as the views of my backend which would then be passed along to the frontend. The frontend incorporates the React framework with Redux for global state managment. Redux allows for the state of the application to be stored and accessed, thus letting changes to state persist while navigating through the app. Finally, I used Amazon Web Services S3 cloud storage for image hosting. 


## Website Features

### Signup/Sign In Page 

The Signup/Sign In is an almost exact clone of the instagram web app user authentication page. The font and background color are the same to match Instagram's website style. The iPhone template features a Disney castle gif superimposed on the phone. 

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2019-09-20+at+11.53.12+AM.png)

### Posts 

Disneygram users can view other users' posts in a couple of ways. The first way is that users are presented a feed of all the users' posts in the app when they are logged in.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-feed.png)

The other way is that they have the ability to view the posts on another user's profile in a grid layout.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-profile-page.png)

Users able to click on individual posts on a user's profile and a modal pops up showing a bigger view of the picture as well as associated likes and comments.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-post-modal.png)

Users are also able to access a show modal of each post on the feed by either clicking on the image or clicking the comment button 

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/index-modal.png)

### Likes & Comments

Users have the ability to like and comment on a post in three different places: the feed, a feed item modal, and on the user's profile page post show modal. Implementing this feature was perhaps the most difficult part of the project for me. 

Since I went with a modal that used its own reducers, actions, and its own slice of state, I had a very hard time with state management. In hindsight, I should have created my own CSS modal, but I was able to learn a lot more about Redux state in the process of trying to implement the features.

As you can see in the below code snippet, it took quite a bit of coding jiu-jitsu in order to find the exact post that a user was clicking on in order to update its state. Not only did I have to make sure that 3 different reducers were updating their respective slices of state, but also I had to keep track of the order they were being hit in order to not have likes/comments save twice. Since the users reducer was being hit first and updating the state, I had to add in additional logic for the comments in my modal reducer to see if the comment was already added so as to not add it again

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/index-regular-likes.png)
![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/index-modal-likes.png)


```
//users reducer

        case RECEIVE_LIKE:
            let userLike = Object.values(newState).filter(user => user.id === action.like.author_id)[0];
            let userPostLike = Object.values(userLike.posts).filter(post => post.id === action.like.post_id)[0];
            userPostLike.likes.push(action.like);
            return newState;

            
        case REMOVE_LIKE:
            let userUnlike = Object.values(newState).filter(user => user.id === action.like.author_id)[0]
            let userPostUnlike = Object.values(userUnlike.posts).filter(post => post.id === action.like.post_id)[0]
            userPostUnlike.likes.pop(action.like);
            return newState;
        
        case RECEIVE_COMMENT:
            let userComment = Object.values(newState).filter(user => user.id === action.comment.post_author)[0];
            let userPostComment = Object.values(userComment.posts).filter(post => post.id === action.comment.post_id)[0];
            userPostComment.comments.push(action.comment);
            return newState;
           
```

```
//modal reducer
        case RECEIVE_COMMENT:
            // debugger
            if (Object.values(newState).filter(post => post.id === action.comment.post_id)[0]) {
                if (newState.post.comments.filter(comment => comment.id === action.comment.id).length === 0) {
                    let post = Object.values(newState).filter(post => post.id === action.comment.post_id)[0];
                    post.comments.push(action.comment);
                    return newState;
                }
                return newState;
            }
```

### Follows 

Users are able to follow/unfollow one another's profiles. A follow/unfollow button will render if user is on another user's profile. In addition, there are user stats which update based on the lenght of the stat's array. For instance, if a user's followers array has 3 followers, the length of that array will be reflected (see code snippet below).  If the user is on their own profile, they will see edit bio/upload buttons instead.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/follows.png)


```
    render() {
        let hasFollowed;

        this.props.user.followers.forEach(follower => {
            if (follower.follower_id === this.props.currentUser.id) {
                hasFollowed = true;
            } else {
                hasFollowed = false;
            }
        });
   
        if (!hasFollowed) {
            return (
                <div className="user-information">
                    <h1>{this.props.user.username}</h1>
                    <button onClick={this.handleFollow} className="follow-btn">Follow</button>
                </div>

            )
        } else {
            return (
                <div className="user-information">
                    <h1>{this.props.user.username}</h1>
                    <button onClick={this.handleUnfollow} className="follow-btn">Unfollow</button>
                </div>

            )
        }
        
    }
```



