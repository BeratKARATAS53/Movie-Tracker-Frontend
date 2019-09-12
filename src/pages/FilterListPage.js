import React from "react";

import { Table } from "react-bootstrap";

import "../assests/css/Button.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";

export default class FilterListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: "",
      status: "LOADING"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/rest/search")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data, status: "SUCCESS" });
      });
  }

  render() {
    if (this.state.status !== "SUCCESS") {
      return <div>{this.state.status}</div>;
    } else {
      var movies = this.state.movies.map(movie => (
        <tr className='table-td' key={movie.id} style={{ textAlign: "center" }}>
          <td>{movie.id}</td>
          <td>{movie.movieName}</td>
          <td>{movie.releaseDate}</td>
          <td>{movie.imdbRate}</td>
          <td>{movie.duration}</td>
          <td>{movie.genre}</td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table bordered hover size='sm'>
            <thead>
              <tr className='table-tr'>
                <th> # </th>
                <th> Movie Name </th>
                <th> Release Date </th>
                <th> IMDB Rate </th>
                <th> Duration </th>
                <th> Genre </th>
              </tr>
            </thead>
            <tbody>{movies}</tbody>
          </Table>

          <button
            className='navbar-button'
            style={{
              margin: 25,
              height: 50,
              background: "linear-gradient(to right, #bc4e9c, #f80759)"
            }}
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Return Page
          </button>
        </div>
      );
    }
  }
}
