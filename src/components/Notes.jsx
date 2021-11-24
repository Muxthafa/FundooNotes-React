import NotesCard from "./NotesCard.jsx";
import api from "../service/NoteService";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {useSelector} from 'react-redux'
import Popup from './UpdateNote'
import Service from '../service/NoteService'
import { useDispatch } from "react-redux";
import { addTrashNote, setPinNotes } from "../actions/noteAction.js";


const Notes = () => {
  const dispatch = useDispatch()

  const [popup, setPopup] = useState(false);
  const [editNote, setEditedNote] = useState({})

  const myNotes= useSelector((state) => state.allNotes.filteredNotes)
  const pinNotes= useSelector((state) => state.allNotes.pin)

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

  const handleDelete=(note) => {
    let data = {
      ...note,
      isTrash: true
    };
    Service.setTrash(data, note._id)
          .then((res) => {
            dispatch(addTrashNote(res.data.Note));
          })
          .catch((res) => console.log(res))
  }

  const handlePin=(note, pinned) => {
    if(!pinned)
      dispatch(setPinNotes(note));
  }

  return (
    <Grid container spacing={3}>
      {pinNotes.map((note, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={note._id}>
            <NotesCard note={note} showNote={handlePopup} index={index} handleDelete={handleDelete} />
          </Grid>
        );
      })}
      {myNotes.map((note, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={note._id}>
            <NotesCard note={note} showNote={handlePopup} index={index} handleDelete={handleDelete} handlePin={handlePin} />
          </Grid>
        );
      })}
       {popup?<Popup popup={popup} showNote={handleClose} editNote={editNote} /> : null}
    </Grid>
  );
};

export default Notes;


