import React from "react";

import "../assests/css/Button.css";
import "../assests/css/Form.css";

export default class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "movies",
      movies: "",
      status: "LOADING"
    };
  }
  render() {
    return (
      <div className='center' style={{ fontSize: 25 }}>
        <div className='topCenter mx-5 px-5 mt-md-2'>
          <div
            className='row-4 h-25 w-100 text-center align-middle border'
            style={{ cursor: "pointer", fontSize: 20 }}
          >
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/movies/get");
              }}
            >
              Get Movies
            </button>
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/movies/add");
              }}
            >
              Add Movie
            </button>
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/movies/delete");
              }}
            >
              Delete Movie
            </button>
            <button
              className='navbar-button'
              style={{ margin: 25 }}
              onClick={() => {
                this.props.history.push("/rest/movies/update");
              }}
            >
              Update Movie
            </button>
            <button
              className='navbar-button'
              style={{
                margin: 25,
                background: "linear-gradient(to right, #bc4e9c, #f80759)"
              }}
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Home Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
