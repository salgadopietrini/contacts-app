import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";

export default function ContactsPreview(props) {
  return (
    <Link
      to={{ pathname: "/contact", state: { ...props } }}
      style={{ textDecoration: "none" }}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.info.name} secondary={props.info.phone} />
      </ListItemButton>
    </Link>
  );
}
