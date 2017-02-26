import React, { Component } from 'react';
import Users from './Components/Users'
import './App.css';
import {Motion, spring,presets} from 'react-motion';

const users = [
      {name: 'Christian De Martino', isLogged:true, password:"123456", profilePicture:'http://i.imgur.com/ow4gv4R.png'},
    ];

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: users,
      locked : false
    }
  }

  userLogin (event) {
    event.preventDefault();
    console.log(this.userPasswordInput.value);
    this.setState({locked:true})
  }

  render() {
    return (

      <Motion style={{x: spring(this.state.locked ? 100 : 0,{stiffness: 180, damping: 12})}}>
          {({x}) =>

        <form className="App" onSubmit={(e) => this.userLogin(e)}

          style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }}

          >
            <Users users={this.state.users} className="Users"/>
            <div className="Password">
              <input type="password" defaultValue="" required placeholder="Enter Password"
                  className="Input" ref={(input) => {this.userPasswordInput=input}}>
              </input>
              <button type="submit" id="circle"/>
            </div>
      </form>
    }
      </Motion>

    );
  }
}

export default App;
