import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import MoviesPage from "./pages/MoviesPage";
import DirectorsPage from "./pages/DirectorsPage";
import FilterListPage from "./pages/FilterListPage";

import AddUser from "./components/AddUser";
import GetUsers from "./components/GetUsers";
import AddMovie from "./components/AddMovie";
import GetMovies from "./components/GetMovies";
import GetDirectors from "./components/GetDirectors";
import AddDirector from "./components/AddDirector";
import UpdateMovie from "./components/UpdateMovie";

import "./assests/css/index.css";
import "./assests/css/Form.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route path='/rest/login' component={LoginPage} />
    <Route path='/rest/users' component={UsersPage} />
    <Route path='/rest/users/get' component={GetUsers} />
    <Route path='/rest/users/add' component={AddUser} />
    <Route path='/rest/movies' component={MoviesPage} />
    <Route path='/rest/movies/get' component={GetMovies} />
    <Route path='/rest/movies/add' component={AddMovie} />
    <Route path='/rest/movies/update' component={UpdateMovie} />
    <Route path='/rest/directors' component={DirectorsPage} />
    <Route path='/rest/directors/get' component={GetDirectors} />
    <Route path='/rest/directors/add' component={AddDirector} />
    <Route path='/rest/search' component={FilterListPage} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
