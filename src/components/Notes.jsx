import NotesCard from "./NotesCard.jsx";
import api from "../service/NoteService";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Notes = ({notes}) => {

  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid item>
            <NotesCard note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Notes;
