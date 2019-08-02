import React from "react";
import { Link } from "react-router-dom";

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
            <Link style={{ marginLeft: 100 }} to='/rest/movies/get'>
              Get Movie
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/movies/add'>
              Add Movie
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/movies/delete'>
              Delete Movie
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/movies/update'>
              Update Movie
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
