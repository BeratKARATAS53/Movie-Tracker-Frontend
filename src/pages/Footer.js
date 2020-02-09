import axios from "axios";

import { ButtonGroup, Button } from "react-bootstrap";
import React, { Component } from "react";

import "../assests/css/Form.css";
import "../assests/css/Button.css";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      status: "LOADING",
      movies: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/rest/search", {
        movie: this.state.value
      })
      .then(data => {
        this.setState({ movies: data, status: "SUCCESS" });
        console.log(this.state.movies);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='d-flex flex-column'>
        <ButtonGroup size='sm' className='mt-3'>
          <Button href='/rest/users'>Users</Button>
          <Button href='/rest/movies'>Movies</Button>
          <Button href='/rest/directors'>Directors</Button>
        </ButtonGroup>
      </div>
    );
  }
}
