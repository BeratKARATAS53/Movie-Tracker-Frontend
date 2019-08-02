import React from "react";
import { FiX } from "react-icons/fi";
import { Table } from "react-bootstrap";

import "../assests/css/Button.css";
import "../assests/css/Table.css";
import "../assests/css/Form.css";

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

  handleClick() {
    console.log("handle CLick");

    let path = `/rest/movies`;
    this.props.history.push(path);
  }

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var users = this.state.users.map(user => (
        <tr key={user.id} style={{ textAlign: "center" }}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>
            <FiX
              style={{ cursor: "pointer", color: "red" }}
              onClick={this.handleClick}
            />
          </td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr className='table-tr'>
                <th>#</th>
                <th> Username </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </Table>

          <button
            className='navbar-button'
            style={{
              margin: 25,
              height: 50,
              background: "linear-gradient(to right, #bc4e9c, #f80759)"
            }}
            onClick={() => {
              this.props.history.push("/rest/users");
            }}
          >
            Return Page
          </button>
        </div>
      );
    }
  }
}
