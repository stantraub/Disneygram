import { connect } from 'react-redux';
import splash from "./splash";
import { logout } from "../../actions/session_actions";

const msp = ({session, entities: { users }}) => {
    return({
        currentUser: users[session.id]
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
    
}

export default connect(msp, mdp)(splash);