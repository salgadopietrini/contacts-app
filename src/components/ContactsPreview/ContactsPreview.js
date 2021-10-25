import React from "react";
import { Link } from "react-router-dom";

export default function ContactsPreview(props) {
  return (
    <div>
      <div>{props.info.name}</div>
      <div>{props.info.phone}</div>
      <Link to={{ pathname: "/contact", state: { ...props } }}>
        <button>Acces!</button>
      </Link>
    </div>
  );
}
