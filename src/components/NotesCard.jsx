import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import PushPinIcon from "@mui/icons-material/PushPin";
import NotesAction from './NotesAction.jsx'

export default function NotesCard({
  note,
  showNote,
  index,
  handleDelete,
  handlePin,
}) {
  const [icons, setIcons] = useState(false);

  const [pin, setPin] = useState(false)

  return (
    <Card
      onMouseOver={() => {
        setIcons(true);
      }}
      onMouseLeave={() => {
        setIcons(false);
      }}
      elevation={icons ? 3 : 2}
    >
      {icons ? (
        <div style={{ height: "45px" }}>
          <IconButton onClick={()=> setPin(prev => !prev)}>
            <PushPinIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
        </div>
      ) : (
        <div style={{ height: "35px", marginTop:"10px" }}>
          {pin? <PushPinIcon size="small" sx={{ color: "black" }} /> : null}
        </div>
      )}

      <CardContent onClick={() => showNote(note, index)}>
        <Typography
          sx={{ fontSize: 17, fontWeight: "bold", color: "black" }}
          color="text.secondary"
          gutterBottom
        >
          {note.title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>

      <NotesAction handleDelete={handleDelete} note={note} icons={icons} />
    </Card>
  );
}
