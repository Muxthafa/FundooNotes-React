import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import AppBar from "../components/AppBar.jsx";
import Notes from "../components/Notes";
import DrawerBar from "../components/Drawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" openDrawer={handleDrawerOpen} open={open} />
      <DrawerBar variant="permanent" open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Notes />
      </Box>
    </Box>
  );
}
