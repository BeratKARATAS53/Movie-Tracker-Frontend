import axios from "axios";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import React, { Component } from "react";

import "../assests/css/Form.css";
import "../assests/css/Button.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      status: "LOADING",
      movies: "",
      filterMovie: ""
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
        filterMovie: this.state.value
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
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>MoveTracker</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/rest/users'>Users</Nav.Link>
          <Nav.Link href='/rest/movies'>Movies</Nav.Link>
          <Nav.Link href='/rest/directors'>Directors</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button
            variant='outline-warning'
            onChange={this.handleChange}
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}
