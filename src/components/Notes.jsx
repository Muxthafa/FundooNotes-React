import NotesCard from "./NotesCard.jsx";
import api from "../service/NoteService";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {useSelector} from 'react-redux'
import Popup from './UpdateNote'

const Notes = () => {
  const [popup, setPopup] = useState(false);
  const [editNote, setEditedNote] = useState({})
  const myNotes= useSelector((state) => state.allNotes.filteredNotes)

  const handlePopup = (note,index) => {
    const data = {
      note: note,
      index: index
    }
    setEditedNote(data)
    setPopup((prev) => !prev)
  }

  const handleClose=() => {
    setPopup((prev) => !prev)
  }
  
  return (
    <Grid container spacing={3}>
      {myNotes.map((note, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={note._id}>
            <NotesCard note={note} showNote={handlePopup} index={index} />
          </Grid>
        );
      })}
       {popup?<Popup popup={popup} showNote={handleClose} editNote={editNote} /> : null}
    </Grid>
  );
};

export default Notes;
