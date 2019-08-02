import React from "react";
import { Link } from "react-router-dom";

import "../assests/css/Form.css";

export default class UsersPage extends React.Component {
  render() {
    return (
      <div className='center' style={{ fontSize: 25 }}>
        <div className='topCenter mx-5 px-5 mt-md-2'>
          <div
            className='row-4 h-25 w-100 text-center align-middle border'
            style={{ cursor: "pointer", fontSize: 20 }}
          >
            <Link style={{ marginLeft: 100 }} to='/rest/users/get'>
              Get Users
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/users/add'>
              Add Users
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/users/delete'>
              Delete Users
            </Link>
            <Link style={{ marginLeft: 100 }} to='/rest/users/update'>
              Update Users
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
