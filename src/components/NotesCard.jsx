import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function NotesCard({ note }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {note.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
