import { Button, Card, CardContent, Dialog, DialogActions, DialogTitle, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";

import api from "../service/NoteService";

import { removeTrashNote, setTrash , deleteFromTrash} from "../actions/noteAction.js";
import Service from '../service/NoteService'

function Trash() {   
  const [popup, setPopup] = useState(false);
  const [del, setDelete] = useState({})

  const dispatch = useDispatch()

    const handleTrash = (note) => {
      let data = {
        ...note,
        isTrash: false
      };
      Service.setTrash(data, note._id)
            .then((res) => {
              dispatch(removeTrashNote(res.data.Note));
            })
            .catch((res) => console.log(res))
    }

    const handleDelete = (note) => {
        Service
        .deleteNote(note.note._id)
        .then((res) => {
          dispatch(deleteFromTrash(res.data.Note));
          setPopup((prev) => !prev)
        })
        .catch((err) => console.log(err));
    }

    useEffect(()=>{
      let token = sessionStorage.getItem("token");
      api
      .noteFetch(token)
      .then((res) => {
        dispatch(setTrash(res.data.Notes.filter((item) => item.isTrash)))

      })
      .catch((err) => console.log(err));
    }, [])

    const handlePopup = (note,index) => {
      const data = {
        note: note,
        index: index
      }
      setDelete(data)
      setPopup((prev) => !prev)
    }

    const handleClose=() => {
      setPopup((prev) => !prev)
    }
    

      const myNotes = useSelector((state) => state.allNotes.trash);

  return (
    <Grid container spacing={3}>
      {myNotes
        .map((note, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={note._id}>
              <Card>
                <CardContent >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "bold", color: "black" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {note.title}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {note.content}
                  </Typography>
                </CardContent>
                <Button>
                  <DeleteForeverIcon sx={{ color: "black" }} onClick={() => handlePopup(note, index)}/>
                </Button>
                <Button onClick={()=> handleTrash(note)}>
                  <RestoreFromTrashIcon sx={{ color: "black" }} />
                </Button>
              </Card>
            </Grid>
          );
        })}
        {popup?<Popup del={del} popup={popup} showNote={handleClose} handleDelete={handleDelete} /> : null}
    </Grid>
  );
}

function Popup({ del, popup, showNote, handleDelete }) {
  return (
    <Dialog onClose={showNote} open={popup}>
      <DialogTitle>
          {"Do You want to delete permanently?"}
      </DialogTitle>

      <DialogActions>
        <Button
          onClick={() => handleDelete(del)}
          style={{ color: "black", textTransform: "none" }}
        >
          Delete
        </Button>
        <Button
          onClick={showNote}
          style={{ color: "black", textTransform: "none" }}
        >
          close
        </Button>
      </DialogActions>
    </Dialog>
  )
}


export default Trash;
