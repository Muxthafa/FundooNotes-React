import { IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

export default function NotesAction({handleDelete, note, icons}) {
  return (
    <div>
      {icons ? (
        <div
          style={{
            height: "35px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <IconButton onClick={() => handleDelete(note)}>
            <ColorLensOutlinedIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
          <IconButton onClick={() => handleDelete(note)}>
            <InsertPhotoOutlinedIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
          <IconButton onClick={() => handleDelete(note)}>
            <DeleteIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
        </div>
      ) : (
        <div style={{ height: "35px" }}></div>
      )}
    </div>
  );
}
