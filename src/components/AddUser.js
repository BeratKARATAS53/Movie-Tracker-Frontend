import axios from "axios";

import React, { Component } from "react";

import "../assests/css/Form.css";

export default class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      roles: "ROLE_USER"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    axios
      .post("http://localhost:8080/rest/users", {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        email: this.state.email,
        roles: this.state.roles
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick() {
    let path = `/rest/users`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div className='center'>
        <div className='card'>
          <h1>Add User</h1>
          <form>
            <input
              className='form-item'
              placeholder='User Name goes here...'
              name='username'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='First Name goes here...'
              name='firstName'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Last Name goes here...'
              name='lastName'
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
            <input
              className='form-item'
              placeholder='Email Address goes here...'
              name='email'
              type='text'
              onChange={this.handleChange}
            />
            <select className='form-item'>
              <option>SELECT ROLE</option>
              <option name='roles' value='2'>
                ROLE_USER
              </option>
              <option name='roles' value='1'>
                ROLE_ADMIN
              </option>
            </select>
            <input
              className='form-submit'
              value='SUBMIT'
              type='submit'
              onClick={this.handleSubmit}
            />
          </form>
          <br />
          <button className='form-button' onClick={this.handleClick}>
            Go To User Home Page
          </button>
        </div>
      </div>
    );
  }
}
