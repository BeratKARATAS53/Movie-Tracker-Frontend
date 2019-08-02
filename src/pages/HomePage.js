import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assests/css/Form.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className='topCenter mx-5 px-5 mt-md-2'>
        <div
          className='row-4 h-25 w-100 text-center align-middle border'
          style={{ cursor: "pointer", fontSize: 20 }}
        >
          <Link className='font-item' style={{ marginLeft: 100 }} to='/'>
            Home
          </Link>
          <Link style={{ marginLeft: 100 }} to='/rest/login'>
            Login
          </Link>
          <Link style={{ marginLeft: 100 }} to='/rest/register'>
            Register
          </Link>
          <Link style={{ marginLeft: 100 }} to='/rest/users'>
            Users
          </Link>
          <Link style={{ marginLeft: 100 }} to='/rest/movies'>
            Movies
          </Link>
          <Link style={{ marginLeft: 100 }} to='/rest/directors'>
            Directors
          </Link>
        </div>
      </div>
    );
  }
}
