import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

import "../assests/css/Table.css";
import "../assests/css/Button.css";
import "../assests/css/Form.css";

import pic1 from "../img/wall1.jpeg";

export default class GetDirectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { directors: "", status: "LOADING" };
  }

  componentDidMount() {
    fetch("http://localhost:8080/rest/directors")
      .then(response => response.json())
      .then(data => {
        this.setState({ directors: data, status: "SUCCESS" });
      });
  }

  handleDelete(event) {
    fetch("http://localhost:8080/rest/directors/" + event, {
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
      var directors = this.state.directors.map(director => (
        <div
          style={{
            width: "34%",
            position: "relative",
            fontSize: 18
          }}
          className='mt-2 mb-3 pb-2 px-2 pt-3'
          key={director.id}
        >
          <div className='card-body'>
            <img
              style={{
                width: "100%",
                height: 300,
                cursor: "pointer"
              }}
              className='mx-auto mt-2'
              src={pic1}
              alt='Images Not Found!'
            />
            <div className='mr-2'>
              <strong> Director Name: </strong>
              {director.directorName}
              <br />
              <strong> Director Surname: </strong>
              {director.directorSurname}
              <br />
              <strong> Birth Date: </strong>
              {director.birthDate}
              <br />
              <strong> Birth Place: </strong>
              {director.birthPlace}
            </div>
            <br />
            <div
              style={{ bottom: 0, width: "%100" }}
              className='row justify-content-center'
            >
              <button type='button' className='btn btn-dark ml-2 w-75'>
                Go To Director Page
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
          <br />
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-1'></div>
              <div className='col-12 container-body'>
                <br />
                <div>
                  <div className='row justify-content-center'>
                    {directors.length > 0 ? directors : "No Director Found!"}
                  </div>
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
