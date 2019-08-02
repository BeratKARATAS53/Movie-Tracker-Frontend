import axios from "axios";

import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "../assests/css/Form.css";

export default class AddDirector extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: "",
      birthPlace: "",
      startDate: new Date(),
      directorName: "",
      directorSurname: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    axios
      .post("http://localhost:8080/rest/directors", {
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        directorName: this.state.directorName,
        directorSurname: this.state.directorSurname
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleClick() {
    let path = `/rest/directors`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div className='center'>
        <div className='card'>
          <h1>Add Director</h1>
          <form>
            <input
              className='form-item'
              placeholder='Director Name goes here...'
              name='directorName'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Director Surname goes here...'
              name='directorSurname'
              type='text'
              onChange={this.handleChange}
            />
            <h4>Birth Date</h4>
            <DatePicker
              className='form-item'
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
            <input
              className='form-item'
              placeholder='Birth Place goes here...'
              name='birthPlace'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-submit'
              value='SUBMIT'
              type='submit'
              onClick={this.handleSubmit}
            />
          </form>
          <br />
          <button className='form-button' onClick={this.handleClick}>
            Go To Director Home Page
          </button>
        </div>
      </div>
    );
  }
}
