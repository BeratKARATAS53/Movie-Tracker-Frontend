import axios from "axios";

import React from "react";

import { Redirect } from "react-router-dom";

import { Table } from "react-bootstrap";
import { FiPenTool, FiTrash2 } from "react-icons/fi";

import "../assests/css/Button.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";

export default class GetMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "movies",
      movie: "",
      movieList: "",
      movieId: "",
      status: "LOADING",
      update: "",
      delete: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/rest/movies")
      .then(response => response.json())
      .then(data => {
        this.setState({ movieList: data, status: "SUCCESS" });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick() {
    let path = `/rest/movies`;
    this.props.history.push(path);
  }

  handleUpdate(event) {
    fetch("http://localhost:8080/rest/movies/" + event)
      .then(response => response.json())
      .then(data => {
        this.setState({ movie: data });
        console.log(this.state.movie);
      });
    return <Redirect to='/rest/movies/update' />;
  }

  handleDelete(event) {
    fetch("http://localhost:8080/rest/movies/" + event, {
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
      var movieList = this.state.movieList.map(movie => (
        <tr className='table-td' key={movie.id} style={{ textAlign: "center" }}>
          <td>{movie.id}</td>
          <td>{movie.movieName}</td>
          <td>{movie.releaseDate}</td>
          <td>{movie.imdbRate}</td>
          <td>{movie.duration}</td>
          <td>{movie.genre}</td>
          <td>
            <FiPenTool
              style={{ cursor: "pointer", color: "blue" }}
              name='update'
              onClick={() => this.handleUpdate(movie.id)}
            />
            |
            <FiTrash2
              style={{ cursor: "pointer", color: "red" }}
              name='delete'
              onChange={this.handleChange}
              onClick={() => this.handleDelete(movie.id)}
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
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>{movieList}</tbody>
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
