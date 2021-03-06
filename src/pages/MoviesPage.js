import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "react-datepicker/dist/react-datepicker.css";
import "../assests/css/Button.css";
import "../assests/css/Container.css";
import "../assests/css/Form.css";
import "../assests/css/Table.css";

import pic1 from "../img/wall1.jpeg";

export default class MoviePage extends React.Component {
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
        <div
          style={{
            width: "30%",
            minWidth: "100p",
            position: "relative",
            fontSize: 18
          }}
          className='mt-2 mb-3 pb-2 px-2 pt-3'
          key={movie.id}
        >
          <div className='card-body'>
            <img
              style={{
                width: "100%",
                height: "50%",
                cursor: "pointer"
              }}
              className='mx-auto mt-2'
              src={pic1}
              alt='Images Not Found!'
            />
            <div className='mr-2'>
              <strong> {movie.movieName} </strong>
              <br />
              <strong> Release Date: </strong>
              {movie.releaseDate}
              <br />
              <strong> Imdb Rate: </strong>
              {movie.imdbRate}
              <br />
              <strong> Genre: </strong>
              {movie.genre}
            </div>
            <br />
            <div
              style={{ bottom: 0, width: "%100" }}
              className='row justify-content-center'
            >
              <button type='button' className='btn btn-dark ml-2 w-75'>
                Go To Movie Page
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
          <div className='row'>
            <div className='col-3 ml-4 mr-4 pt-4 container-leftside-body'>
              <h3 className='ml-1' style={{ color: "white" }}>
                GENRES
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Action
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Science-Fiction
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Race
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Based-Story
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Documentary
                </a>
              </h3>
              <br />
              <h3 className='ml-1' style={{ color: "white" }}>
                DIRECTORS
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 1
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 2
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 3
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 4
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 5
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 6
                </a>
                <br />
                <a
                  className='ml-3'
                  href='/rest/search'
                  style={{ color: "#add100" }}
                >
                  Director 7
                </a>
              </h3>
            </div>
            <div className='col-8  container-body'>
              <br />
              <div>
                <div className='row justify-content-center'>
                  {movieList.length > 0 ? movieList : "No movie found"}
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
