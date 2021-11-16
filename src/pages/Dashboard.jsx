import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import AppBar from "../components/AppBar.jsx";
import Notes from "../components/Notes";
import DrawerBar from "../components/Drawer";
import api from "../service/NoteService";
import { useDispatch } from "react-redux";
import { setMyNotes } from "../redux/actions/noteAction.js";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState("Notes")
  const dispatch = useDispatch()

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    api
      .noteFetch(token)
      .then((res) => {
        dispatch(setMyNotes(res.data.Notes))
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTitle = (title) => {
    setTitle(title)
    console.log(title);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" openDrawer={handleDrawerOpen} open={open} title={title} />
      <DrawerBar variant="permanent" open={open} handleTitle={handleTitle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:"30px", marginLeft:"30px" }}>
        <DrawerHeader />
        <Notes />
      </Box>
    </Box>
  );
}
