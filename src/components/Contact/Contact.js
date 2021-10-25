import React from "react";

export default function Contact(props) {
  return (
    <div>
      <div>{props.info.name}</div>
      <div>{props.info.phone}</div>
      <div>{props.info.email}</div>
    </div>
  );
}
