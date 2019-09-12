import axios from "axios";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../assests/css/Form.css";
import "../assests/css/Button.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      status: "LOADING",
      movies: ""
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
      .post("http://localhost:8080/rest/search", {
        movie: this.state.value
      })
      .then(data => {
        this.setState({ movies: data, status: "SUCCESS" });
        console.log(this.state.movies);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.status === "SUCCESS") {
      if (localStorage.getItem("token") === null) {
        alert("Yetkisiz Giriş Tespit Edildi! Giriş Reddedildi.");
        return <Redirect to='/rest/login' />;
      }
      return <Redirect to='/rest/search' />;
    }
    return (
      <div className='topCenter mx-5 px-5 mt-md-2'>
        <form
          style={{
            textAlign: "center"
          }}
        >
          <br />
          <br />
          <input
            className='form-search-item col-3 form-custom-color'
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
            onClick={() => {
              this.props.history.push("/rest/users");
            }}
          >
            Users
          </button>
          <button
            className='navbar-button'
            onClick={() => {
              this.props.history.push("/rest/movies");
            }}
          >
            Movies
          </button>
          <button
            className='navbar-button'
            onClick={() => {
              this.props.history.push("/rest/directors");
            }}
          >
            Directors
          </button>
          <button
            className='navbar-button'
            style={{
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
