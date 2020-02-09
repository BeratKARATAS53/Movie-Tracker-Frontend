import React from "react";
import { FiPenTool, FiTrash2 } from "react-icons/fi";
import { Table } from "react-bootstrap";

import "../assests/css/Table.css";
import "../assests/css/Button.css";
import "../assests/css/Form.css";

export default class AdminGetDirectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { directors: "", status: "LOADING" };
  }

  componentDidMount() {
    fetch("http://localhost:8080/rest/directors")
      .then(response => response.json())
      .then(data => {
        this.setState({ directors: data, status: "SUCCESS" });
      });
  }

  handleDelete(event) {
    fetch("http://localhost:8080/rest/directors/" + event, {
      method: "delete"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
    window.location.reload();
  }

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var directors = this.state.directors.map(director => (
        <tr
          className='table-td'
          key={director.id}
          style={{ textAlign: "center" }}
        >
          <td>{director.id}</td>
          <td>{director.directorName}</td>
          <td>{director.directorSurname}</td>
          <td>{director.birthDate}</td>
          <td>{director.birthPlace}</td>
          <td>
            <FiPenTool
              style={{
                cursor: "pointer",
                color: "#00b4db"
              }}
              name='update'
              onClick={this.handleUpdate}
            />
            |
            <FiTrash2
              style={{ cursor: "pointer", color: "#f80759" }}
              name='delete'
              onChange={this.handleChange}
              onClick={() => this.handleDelete(director.id)}
            />
          </td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table striped bordered hover size='sm' variant='dark'>
            <thead>
              <tr className='table-tr'>
                <th>#</th>
                <th> Name </th>
                <th> Surname </th>
                <th> Birth Date </th>
                <th> Birth Place </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>{directors}</tbody>
          </Table>
          <button
            className='navbar-button'
            style={{
              margin: 25,
              height: 50,
              background: "linear-gradient(to right, #bc4e9c, #f80759)"
            }}
            onClick={() => {
              this.props.history.push("/rest/directors");
            }}
          >
            Return Page
          </button>
        </div>
      );
    }
  }
}
