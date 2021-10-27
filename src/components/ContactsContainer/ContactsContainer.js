import React, { useContext } from "react";
import ContactsPreview from "../ContactsPreview/ContactsPreview";
import { Link } from "react-router-dom";
import { Context } from "../../StoreWrapper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

export default function ContactsContainer() {
  const { contacts } = useContext(Context);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {contacts.length > 0 ? (
        <>
          <Typography variant="h5" component="div" gutterBottom>
            My contacts
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {contacts.map((elem, index) => (
              <ContactsPreview
                info={elem}
                key={Math.floor(Math.random() * 1000000)}
                id={index}
              />
            ))}
            <Divider variant="inset" component="li" />
          </List>
        </>
      ) : (
        <>
          <Typography variant="h5" component="div" gutterBottom>
            Create new contact!
          </Typography>
        </>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "35%",
        }}
      >
        <Link to={"/contactsCreator"}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </Box>
  );
}
