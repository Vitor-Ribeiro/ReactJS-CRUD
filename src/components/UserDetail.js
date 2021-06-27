import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const UserDetail = (props) => {
  const { name, email, empresa, cpf } = props.location.state.user;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
          <div className="description">{empresa}</div>
          <div className="description">{cpf}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to User List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
