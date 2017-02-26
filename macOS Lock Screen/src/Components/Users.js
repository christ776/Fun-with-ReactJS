import React, { Component } from 'react';

import User from './User'

class Users extends Component {

  render() {
    let userComponents
    if (this.props.users) {
      userComponents = this.props.users.map (user => {
        console.log(user)
        return (
          <User key={user} data={user} />
        );
      });
    }

    return (
      <span>
        {userComponents}
      </span>
    );
  }
}

export default Users;
