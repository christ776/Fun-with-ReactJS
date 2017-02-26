import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div>
      <span className="centerImage">
      <img src={this.props.data.profilePicture} height="80" width="80"/>
      </span>
          <div className="UserName">
            {this.props.data.name}
          </div>
      </div>
    );
  }
}

export default User;
