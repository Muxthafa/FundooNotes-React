import NotesCard from "./NotesCard.jsx";
import api from "../service/NoteService";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {useSelector} from 'react-redux'

const Notes = () => {
  const myNotes= useSelector((state) => state.allNotes.filteredNotes)
  return (
    <Grid container spacing={3}>
      {myNotes.map((note) => {
        return (
          <Grid item xs={12} sm={6} md={3}>
            <NotesCard note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Notes;
