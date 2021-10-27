import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Context } from "../../StoreWrapper";

export default function ContactsCreator(props) {
  const [userInfo, setUserInfo] = useState({});
  const { handleAdd } = useContext(Context);

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
    handleAdd(userInfo);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <form style={{ marginBottom: "20px" }}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          onChange={handleName}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          onChange={handlePhone}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          onChange={handleEmail}
        />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="secondary">
            Back!
          </Button>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outlined" onClick={add}>
            Add!
          </Button>
        </Link>
      </div>
    </Box>
  );
}
