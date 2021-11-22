import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function NotesCard({ note,showNote, index }) {
  
  return (
      <Card onClick={() => showNote(note,index)}>
        <CardContent>
          <Typography sx={{ fontSize: 14 , fontWeight: "bold", color: "black"}} color="text.secondary" gutterBottom>
            {note.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
  );
}
