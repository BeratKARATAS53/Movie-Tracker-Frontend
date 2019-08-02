import React from "react";

import { Table } from "react-bootstrap";
import { FiX } from "react-icons/fi";

import "../assests/css/Button.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";

export default class GetMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "movies",
      movies: "",
      status: "LOADING"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/rest/movies")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data, status: "SUCCESS" });
      });
  }

  handleClick() {
    let path = `/rest/movies`;
    this.props.history.push(path);
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
          <Table bordered hover size='sm'>
            <thead>
              <tr className='table-tr'>
                <th> # </th>
                <th> Movie Name </th>
                <th> Release Date </th>
                <th> IMDB Rate </th>
                <th> Duration </th>
                <th> Genre </th>
                <th> Delete </th>
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
              this.props.history.push("/rest/movies");
            }}
          >
            Return Page
          </button>
        </div>
      );
    }
  }
}
