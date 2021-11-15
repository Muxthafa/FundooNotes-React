import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import AppBar from "../components/AppBar.jsx";
import Notes from "../components/Notes";
import DrawerBar from "../components/Drawer";
import api from "../service/NoteService";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [search,setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([])
  const [title,setTitle] = useState("")

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm)
  }

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    api
      .noteFetch(token)
      .then((res) => {
        console.log(res.data);
        setNotes(res.data.Notes);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, notes]);

  const handleTitle = (title) => {
    setTitle(title)
    console.log(title);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" openDrawer={handleDrawerOpen} open={open} searchKeyword={handleSearch} title={title} />
      <DrawerBar variant="permanent" open={open} handleTitle={handleTitle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:"30px", marginLeft:"30px" }}>
        <DrawerHeader />
        <Notes notes={filteredNotes}/>
      </Box>
    </Box>
  );
}
