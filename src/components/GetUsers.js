import React from "react";
import { Table } from "react-bootstrap";

import "../assests/css/Form.css";

export default class GetUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: "", userOrMember: false, status: "LOADING" };

    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/rest/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, status: "SUCCESS" });
      });
  }
  routeChange(event) {
    this.setState({ userOrMember: event.target.value });
  }

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var users = this.state.users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th> Username </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email </th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </Table>
        </div>
      );
    }
  }
}
