import axios from "axios";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../assests/css/Button.css";
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
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleClick() {
    let path = `/`;
    this.props.history.push(path);
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
        self.setState({
          isLoggedIn: true,
          token: JSON.stringify(response.data)
        });
        alert("Giriş Başarılı");
      })
      .catch(function(error) {
        if (error.response.status === 500) {
          alert("Kullanıcı Adı ya da Parola Hatalı!");
        } else alert(error.response.status);
      });
  }

  render() {
    if (localStorage.getItem("token") !== null) {
      alert("Zaten Giriş Yapıldı. Çıkış Yapıp Tekrar Deneyiniz.");
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
              LOGIN
            </button>
            <br />
            <button className='form-button' onClick={this.handleClick}>
              Go To Home Page
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
