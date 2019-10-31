import React from 'react'
import { connect } from 'react-redux';
import Follow from './follow';
import { withRouter } from 'react-router-dom';
import { createFollow, fetchFollows, deleteFollow } from "../../actions/follow_actions";

const msp = (state, ownProps) => {
    let userId = ownProps.user.id;
    
    return ({
        currentUser: state.entities.users[state.session.id],
        userId
    })

}

const mdp = dispatch => {

    return ({
        createFollow: (follow) => dispatch(createFollow(follow)),
        fetchFollows: () => dispatch(fetchFollows()),
        deleteFollow: (id) => dispatch(deleteFollow(id))
    })
}

export default withRouter(connect(msp, mdp)(Follow));