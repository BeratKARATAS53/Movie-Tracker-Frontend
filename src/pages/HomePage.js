import React, { Component } from "react";

import "../assests/css/Form.css";
import "../assests/css/Button.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = { route: "" };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogout() {
    localStorage.clear();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className='topCenter mx-5 px-5 mt-md-2'>
        <div
          className='row-4 h-25 w-100 text-center align-middle border'
          style={{ cursor: "pointer", fontSize: 20 }}
        >
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Home
          </button>
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/rest/login");
            }}
          >
            Login
          </button>
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/rest/users/add");
            }}
          >
            Add User
          </button>
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/rest/movies");
            }}
          >
            Movies
          </button>
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/rest/users");
            }}
          >
            Users
          </button>
          <button
            className='navbar-button'
            style={{ margin: 25 }}
            onClick={() => {
              this.props.history.push("/rest/directors");
            }}
          >
            Directors
          </button>
          <button
            className='navbar-button'
            style={{
              margin: 25,
              marginLeft: 350,
              background: "linear-gradient(to right, #bc4e9c, #f80759)"
            }}
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
