import { IconButton } from "@mui/material";
import React,{useState, useRef} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ColorPopOver from "./ColorPopOver";



export default function NotesAction({handleDelete, note, icons, color, setColor}) {
    const [isColorPopoverOpen, setColorPopoverOpen] = useState(false);
    const refActionColor = useRef();

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
          <IconButton onClick={() => setColorPopoverOpen(true)} ref={refActionColor}>
            <ColorLensOutlinedIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
          <IconButton >
            <InsertPhotoOutlinedIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
          <IconButton onClick={() => handleDelete(note)}>
            <DeleteIcon size="small" sx={{ color: "grey" }} />
          </IconButton>
        </div>
      ) : (
        <div style={{ height: "35px" }}></div>
      )}

<ColorPopOver
        isOpen={isColorPopoverOpen}
        onClose={() => setColorPopoverOpen(false)}
        currentColor={color}
        onColorSelect={color => setColor(color)}
        anchorEl={refActionColor.current}
      />
    </div>
  );
}
