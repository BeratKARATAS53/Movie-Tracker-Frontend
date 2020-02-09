import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

import "react-datepicker/dist/react-datepicker.css";
import "../assests/css/Button.css";
import "../assests/css/Container.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";
import pic1 from "../img/wall1.jpeg";

export default class GetUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: "", userOrMember: false, status: "LOADING" };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/rest/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, status: "SUCCESS" });
      });
  }

  handleDelete(event) {
    fetch("http://localhost:8080/rest/users/" + event, {
      method: "delete"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
    window.location.reload();
  }

  handleClick() {
    console.log("handle CLick");

    let path = `/rest/users`;
    this.props.history.push(path);
  }

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var users = this.state.users.map(user => (
        <div
          style={{
            width: "30%",
            position: "relative",
            fontSize: 18
          }}
          className='mt-2 mb-3 pb-2 px-2 pt-3'
          key={user.id}
        >
          <div className='card-body'>
            <img
              style={{
                width: "100%",
                height: 200,
                cursor: "pointer"
              }}
              className='mx-auto mt-2'
              src={pic1}
              alt='Images Not Found!'
            />
            <div className='mr-2'>
              <strong> {user.username} </strong>
              <br />
              <strong> First Name: </strong>
              {user.firstName}
              <br />
              <strong> Last Name: </strong>
              {user.lastName}
              <br />
              <strong> E-mail: </strong>
              {user.email}
            </div>
            <br />
            <div
              style={{ bottom: 0, width: "%100" }}
              className='row justify-content-center'
            >
              <button type='button' className='btn btn-dark ml-2 w-75'>
                Go To User Page
              </button>
            </div>
          </div>
        </div>
      ));
      return (
        <div className='topCenter'>
          <Header />
          <br />
          <br />
          <br />
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-1'></div>
              <div className='col-12 container-body'>
                <br />
                <div>
                  <div className='row justify-content-center'>
                    {users.length > 0 ? users : "No User Found!"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
