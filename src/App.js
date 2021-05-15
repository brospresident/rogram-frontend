import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

const initialState = {
  atLogin: true,
  atRegister: false,
  user: {
    id: null,
    name: '',
    email: '',
    nickname: ''
  }
};
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      atLogin: true,
      atRegister: false,
      user: {
        id: null,
        name: '',
        email: '',
        nickname: ''
      }
    };
  }

  onClickRegister = () => {
    this.setState({atLogin: false, atRegister: true})
  }

  loadUser = (user) => {
    this.setState({user: user});
  }

  onSignOut = () => {
    this.setState(initialState);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/'>
            <Particles className = 'particles'/>
            {this.state.atLogin === true && this.state.user.id === null && <Login loadUser={this.loadUser} onClickRegister={this.onClickRegister} onSubmitLogin={this.onSubmitLogin}/>}
            {this.state.atRegister === true && this.state.user.id === null && <Register loadUser={this.loadUser}/>}
            {this.state.user.id !== null && <Home user={this.state.user} signOutMethod={this.onSignOut}/>}
          </Route>
        </div>
      </Router>
    )
  }
}
