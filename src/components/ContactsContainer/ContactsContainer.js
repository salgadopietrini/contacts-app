import React, { useContext } from "react";
import ContactsPreview from "../ContactsPreview/ContactsPreview";
import { Link } from "react-router-dom";
import { Context } from "../../StoreWrapper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function ContactsContainer() {
  const { store } = useContext(Context);

  return (
    <div>
      {store.contacts.length > 0 ? (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {store.contacts.map((elem, index) => (
            <ContactsPreview
              info={elem}
              key={Math.floor(Math.random() * 1000000)}
              id={index}
            />
          ))}
          <Divider variant="inset" component="li" />
        </List>
      ) : (
        <>
          <h2>Create a new contact!</h2>
        </>
      )}
      <Link to={"/contactsCreator"}>
        <button>Add</button>
      </Link>
    </div>
  );
}
