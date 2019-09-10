import axios from "axios";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "../assests/css/Form.css";
import "../assests/css/Button.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      status: "LOADING",
      selected: ""
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogout() {
    localStorage.clear();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8030/rest/search", {
        movie: this.state.value
      })
      .then(this.setState({ status: "SUCCESS" }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.status === "SUCCESS") {
      return <Redirect to='/rest/search' />;
    }
    return (
      <div className='topCenter mx-5 px-5 mt-md-2'>
        <form
          style={{
            textAlign: "center"
          }}
        >
          {/* <DropdownButton
              value={this.state.selected}
              title='Categories'
              onChange={this.handleChange}
            >
              <Dropdown.Item as='button'> User </Dropdown.Item>
              <Dropdown.Item as='button'> Movie </Dropdown.Item>
              <Dropdown.Item as='button'> Director </Dropdown.Item>
            </DropdownButton> */}
          <input
            className='form-item col-3 form-custom-color'
            placeholder='Search movie name goes here...'
            name='value'
            type='text'
            onChange={this.handleChange}
          />
          <button
            className='btn btn-primary'
            style={{ height: 50 }}
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </form>
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
