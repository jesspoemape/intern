import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import NewProfile from './components/NewProfile/NewProfile.js';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      usersArr: [ {name: 'Jessica', tagline: 'I love bears', profilePic: 'Jprofile.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, 
                  {name: 'Juan Jorge', tagline: 'I love N64', profilePic: 'JJprofile.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} 
                ]
    }
    this.addUser = this.addUser.bind(this);
  }

// class method to add a new user
addUser() {
  this.setState({
    usersArr: [ ...this.state.usersArr, newUser]
  });
}

  render() {
    return (
      <div>
        <Header/>
        <NewProfile addUser={ this.addUser }/>
      </div>
    );
  }
}

export default App;
