import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      users: []
    };

    // this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

//   update(field) {
//     return e => {
//       let filtered = this.props.users.filter(user =>
//         user.username.includes(e.target.value)
//       );
//       if (e.target.value === "") {
//         filtered = [];
//       }
//       this.setState({
//         [field]: e.target.value,
//         users: filtered
//       });
//     };
//   }

  render() {
    return <div></div>;
  }
}

export default Search;