import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default ({ openDrawer }) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => openDrawer()}
          edge="start"
          sx={{
            marginRight: "36px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          FundooNotes
        </Typography>
        <TextField
          placeholder="Search…"
          style={{ width: "50%", margin: "auto 50px" }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
            style: { color: "white" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
