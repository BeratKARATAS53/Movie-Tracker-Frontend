import React from "react";
import { Table } from "react-bootstrap";

import "../assests/css/Form.css";

export default class GetDirectors extends React.Component {
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

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var directors = this.state.directors.map(director => (
        <tr key={director.id}>
          <td>{director.id}</td>
          <td>{director.directorName}</td>
          <td>{director.directorSurname}</td>
          <td>{director.birthDate}</td>
          <td>{director.birthPlace}</td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th> Name </th>
                <th> Surname </th>
                <th> Birth Date </th>
                <th> Birth Place </th>
              </tr>
            </thead>
            <tbody>{directors}</tbody>
          </Table>
        </div>
      );
    }
  }
}
