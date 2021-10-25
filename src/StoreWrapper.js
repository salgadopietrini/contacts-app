import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import ContactsCreator from "./components/ContactsCreator/ContactsCreator";
import ContactsContainer from "./components/ContactsContainer/ContactsContainer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Context = React.createContext(null);

export default function StoreWrapper() {
  const [state, setState] = useState({
    store: { contacts: [] },
    actions: {
      handleAdd: (contact) => {
        setState((prevValue) => ({
          store: {
            ...prevValue.store,
            contacts: [...prevValue.store.contacts, contact],
          },
          actions: { ...prevValue.actions },
        }));
      },
      handleRemove: (id) => {
        setState((prevValue) => ({
          store: {
            ...prevValue.store,
            contacts: prevValue.store.contacts
              .slice(0, id)
              .concat(
                prevValue.store.contacts.slice(
                  id + 1,
                  prevValue.store.contacts.length
                )
              ),
          },
          actions: { ...prevValue.actions },
        }));
      },
      handleEdit: (user, id) => {
        setState((prevValue) => ({
          store: {
            ...prevValue.store,
            contacts: prevValue.store.contacts.map((elem, index) => {
              if (id === index) {
                return user;
              } else {
                return elem;
              }
            }),
          },
          actions: { ...prevValue.actions },
        }));
      },
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Context.Provider value={state}>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={ContactsContainer}></Route>
              <Route exact path={"/contact"} component={Contact}></Route>
              <Route
                exact
                path={"/contactsCreator"}
                component={ContactsCreator}
              ></Route>
            </Switch>
          </BrowserRouter>
        </Context.Provider>
      </Container>
    </React.Fragment>
  );
}
