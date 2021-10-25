import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";

export default function ContactsCreator(props) {
  const [userInfo, setUserInfo] = useState({});
  const { actions } = useContext(Context);

  const handleName = (event) => {
    setUserInfo((prevValue) => ({
      ...prevValue,
      name: event.target.value,
    }));
  };
  const handlePhone = (event) => {
    setUserInfo((prevValue) => ({
      ...prevValue,
      phone: event.target.value,
    }));
  };
  const handleEmail = (event) => {
    setUserInfo((prevValue) => ({
      ...prevValue,
      email: event.target.value,
    }));
  };

  const add = (event) => {
    actions.handleAdd(userInfo);
  };

  return (
    <div>
      <form>
        <Link to={"/"}>
          <button>Back!</button>
        </Link>
        <input onChange={handleName} />
        <input onChange={handlePhone} />
        <input onChange={handleEmail} />
        <Link to={"/"}>
          <button onClick={add}>Add!</button>
        </Link>
      </form>
    </div>
  );
}
