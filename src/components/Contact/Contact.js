import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Context } from "../../StoreWrapper";

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
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Link>
      <form style={{ marginBottom: "20px" }}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          onChange={handleName}
          value={user.name}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          onChange={handlePhone}
          value={user.phone}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          onChange={handleEmail}
          value={user.email}
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
          <Button variant="outlined" onClick={handleReplace}>
            Save
          </Button>
        </Link>
      </div>
    </Box>
  );
}
