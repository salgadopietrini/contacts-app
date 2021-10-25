import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";

export default function Contact(props) {
  const { actions } = useContext(Context);
  const { name, phone, email } = props.location.state.info;
  const { id } = props.location.state;

  const handleDelete = () => {
    actions.handleRemove(id);
    console.log(id);
  };

  return (
    <div>
      <Link to={"/"}>
        <button>Back!</button>
      </Link>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <div>{id}</div>
      <Link to={"/"}>
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  );
}
