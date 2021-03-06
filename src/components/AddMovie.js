import axios from "axios";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../assests/css/Form.css";

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      duration: "",
      directorId: 0,
      genre: "",
      imdbRate: 0,
      releaseDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleDateChange(date) {
    this.setState({
      releaseDate: date
    });
  }

  handleSubmit() {
    axios
      .post("http://localhost:8080/rest/movies", {
        movieName: this.state.movieName,
        duration: this.state.duration,
        directorId: this.state.directorId,
        genre: this.state.genre,
        releaseDate: this.state.releaseDate,
        imdbRate: this.state.imdbRate
      })
      .then(function(response) {
        alert("Movie Başarıyla eklendi.");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick() {
    let path = `/rest/movies`;
    this.props.history.push(path);
  }
  render() {
    if (localStorage.getItem("token") === null) {
      alert("Yetkisiz Giriş Tespit Edildi! Giriş Reddedildi.");
      return <Redirect to='/rest/login' />;
    }
    return (
      <div className='center'>
        <div className='card'>
          <h1>Add Movie</h1>
          <form>
            <input
              className='form-item'
              placeholder='Movie Name goes here...'
              name='movieName'
              type='text'
              onChange={this.handleChange}
            />
            <h4>Release Date</h4>
            <DatePicker
              className='form-item'
              selected={this.state.releaseDate}
              onChange={this.handleDateChange}
            />
            <input
              className='form-item'
              placeholder='Duration goes here...'
              name='duration'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='IMDB Rate goes here...'
              name='imdbRate'
              type='number'
              pattern='[0-9]*'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Genre Name goes here...'
              name='genre'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
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
          <br />
          <button className='form-button' onClick={this.handleClick}>
            Go To Movie Home Page
          </button>
        </div>
      </div>
    );
  }
}
