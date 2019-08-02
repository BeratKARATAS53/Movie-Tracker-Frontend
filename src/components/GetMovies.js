import React from "react";

import { Table } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../assests/css/Form.css";

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
        <tr key={movie.id}>
          <td>{movie.id}</td>
          <td>{movie.movieName}</td>
          <td>{movie.releaseDate}</td>
          <td>{movie.imdbRate}</td>
          <td>{movie.duration}</td>
          <td>{movie.genre}</td>
          <td>
            <FiX style={{ cursor: "pointer" }} onClick={this.handleClick} />
          </td>
        </tr>
        /*
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>{movie.movieName}</Card.Title>
            <Card.Text>Director Id: {movie.directorId}</Card.Text> <br />
            <Card.Text>IMDB Rate: {movie.imdbRate}</Card.Text> <br />
            <Card.Text>Genre: {movie.genre}</Card.Text> <br />
            <Card.Text>Duration: {movie.duration}</Card.Text> <br />
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Release Date: {movie.releaseDate}
            </small>
          </Card.Footer>
        </Card>*/
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Link style={{ marginLeft: 100 }} to='/rest/movies'>
            Return Movie Home Page
          </Link>
          <Table bordered hover size='sm'>
            <thead>
              <tr>
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
        </div>
      );
    }
  }
}
