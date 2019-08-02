import React, { Component } from "react";

import "../assests/css/Form.css";

export default class RegisterPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    console.log("In RegisterPage render()");
    return (
      <div className='center'>
        <div className='card'>
          <h1>Sign Up</h1>
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
              placeholder='First Name goes here...'
              name='firstname'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Last Name goes here...'
              name='lastname'
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
              placeholder='Confirm Password goes here...'
              name='confirmPassword'
              type='text'
              onChange={this.handleChange}
            />
            <input className='form-submit' value='SUBMIT' type='submit' />
          </form>
        </div>
      </div>
    );
  }
}
