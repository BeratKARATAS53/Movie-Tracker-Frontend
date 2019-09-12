import React from "react";
import { Redirect } from "react-router-dom";

import "../assests/css/Button.css";
import "../assests/css/Form.css";

export default class DirectorsPage extends React.Component {
  render() {
    if (localStorage.getItem("token") === null) {
      alert("Yetkisiz Giriş Tespit Edildi! Giriş Reddedildi.");
      return <Redirect to='/rest/login' />;
    }
    return (
      <div className='center' style={{ fontSize: 25 }}>
        <div className='topCenter mx-5 px-5 mt-md-2'>
          <div
            className='row-4 h-25 w-100 text-center align-middle border'
            style={{ cursor: "pointer", fontSize: 20 }}
          >
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/directors/get");
              }}
            >
              Get Directors
            </button>
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/directors/add");
              }}
            >
              Add Director
            </button>
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/directors/update");
              }}
            >
              Update Director
            </button>
            <button
              className='navbar-button'
              style={{
                margin: 25,
                background: "linear-gradient(to right, #bc4e9c, #f80759)"
              }}
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Home Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
