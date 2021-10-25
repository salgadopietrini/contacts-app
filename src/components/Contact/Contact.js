import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";

export default function Contact(props) {
  const { actions } = useContext(Context);
  const { name, phone, email } = props.location.state.info;
  const { id } = props.location.state;
  const [user, setUser] = useState({
    name: name,
    phone: phone,
    email: email,
  });

  const handleReplace = () => {
    actions.handleEdit(user, id);
  };

  const handleDelete = () => {
    actions.handleRemove(id);
  };

  const handleName = (event) => {
    setUser((prevValue) => ({
      ...prevValue,
      name: event.target.value,
    }));
  };

  const handlePhone = (event) => {
    setUser((prevValue) => ({
      ...prevValue,
      phone: event.target.value,
    }));
  };

  const handleEmail = (event) => {
    setUser((prevValue) => ({
      ...prevValue,
      email: event.target.value,
    }));
  };

  return (
    <div>
      <Link to={"/"}>
        <button>Back!</button>
      </Link>
      <div>{user.name}</div>
      <div>{user.phone}</div>
      <div>{user.email}</div>
      <input onChange={handleName} value={user.name} />
      <input onChange={handlePhone} value={user.phone} />
      <input onChange={handleEmail} value={user.email} />
      <Link to={"/"}>
        <button onClick={handleReplace}>Save</button>
      </Link>
      <Link to={"/"}>
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  );
}
