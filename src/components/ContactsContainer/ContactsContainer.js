import React, { useContext } from "react";
import ContactsPreview from "../ContactsPreview/ContactsPreview";
import { Link } from "react-router-dom";
import { Context } from "../../App";

export default function ContactsContainer() {
  const { store } = useContext(Context);

  return (
    <div>
      {store.contacts.length > 0 ? (
        store.contacts.map((elem, index) => (
          <ContactsPreview
            info={elem}
            key={Math.floor(Math.random() * 1000000)}
          />
        ))
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
