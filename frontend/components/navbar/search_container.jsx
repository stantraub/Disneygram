import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Search from "./search";
import { fetchUsers } from "../../actions/user_actions";


const mapStateToProps = state => {
  return {
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
