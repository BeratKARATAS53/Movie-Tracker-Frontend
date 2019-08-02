import axios from "axios";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../assests/css/Form.css";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: "",
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    axios
      .post("http://localhost:8080/rest/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        localStorage.setItem("token", JSON.stringify(response.data));
        self.setState({ isLoggedIn: true });
        alert("Giriş Başarılı");
      })
      .catch(function(error) {
        if (error.response.status === 500) {
          alert("Username or Password False");
        } else alert(error.response.status);
      });
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to='/' />;
    }
    return (
      <div className='center'>
        <div className='card'>
          <h1>Login</h1>
          <form>
            <input
              className='form-item'
              placeholder='Username goes here...'
              name='username'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Password goes here...'
              name='password'
              type='password'
              onChange={this.handleChange}
            />
            <button className='form-submit' onClick={this.handleSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
