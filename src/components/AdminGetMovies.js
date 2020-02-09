import React from "react";

import { Table, Modal } from "react-bootstrap";
import { FiPenTool, FiTrash2 } from "react-icons/fi";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../assests/css/Button.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";

export default class AdminGetMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "movies",
      movie: "",
      movieList: "",
      movieId: "",
      status: "LOADING",
      update: "",
      delete: "",
      startDate: new Date(),
      show: false,
      setShow: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose = () => this.setState({ setShow: false });
  handleShow = () => this.setState({ setShow: true });

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
      });
    this.handleShow();
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
              style={{ cursor: "pointer", color: "#00b4db" }}
              name='update'
              onClick={() => this.handleUpdate(movie.id)}
            />
            |
            <FiTrash2
              style={{ cursor: "pointer", color: "#f80759" }}
              name='delete'
              onClick={() => this.handleDelete(movie.id)}
            />
          </td>
        </tr>
      ));
      return (
        <div className='center' style={{ fontSize: 25 }}>
          <Table striped bordered hover size='sm' variant='dark'>
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
          <Modal show={this.state.setShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ alignSelf: "center" }}>
                Update Movie
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input
                  className='form-item-fixed'
                  placeholder={"Movie Name goes here..."}
                  name='movieName'
                  type='text'
                  onChange={this.handleChange}
                />
                <h5>Release Date</h5>
                <DatePicker
                  className='form-item-fixed'
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                />
                <input
                  className='form-item-fixed'
                  placeholder='Duration goes here...'
                  name='duration'
                  type='number'
                  onChange={this.handleChange}
                />
                <input
                  className='form-item-fixed'
                  placeholder='IMDB Rate goes here...'
                  name='imdbRate'
                  type='number'
                  pattern='[0-9]*'
                  onChange={this.handleChange}
                />
                <input
                  className='form-item-fixed'
                  placeholder='Genre Name goes here...'
                  name='genre'
                  type='text'
                  onChange={this.handleChange}
                />
                <input
                  className='form-item-fixed'
                  placeholder='Director Id goes here...'
                  name='directorId'
                  type='number'
                  onChange={this.handleChange}
                />
                <input
                  className='form-submit'
                  value='SUBMIT'
                  type='submit'
                  onClick={this.handleSubmit}
                />
              </form>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}
