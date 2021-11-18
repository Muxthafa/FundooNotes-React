import React , {useState, useEffect} from 'react'
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, TextField, InputAdornment, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import KeepIcon from '../assets/Capture.PNG'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilteredNotes, setTask } from "../redux/actions/noteAction";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#807774',
  backgroundColor: '#ffffff',
}));

export default ({ openDrawer, searchKeyword, title }) => {
  const [search, setSearch] = useState("");
  const myNotes = useSelector((state) => state.allNotes.Notes);
  const dispatch = useDispatch();

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    dispatch(
      setFilteredNotes(
        myNotes.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      )
    );
  }, [search, myNotes]);
  
  return (
    <AppBar elevation={1}>
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
        <img src={KeepIcon} alt="Loading..." style={{width:"2%", marginRight: "20px"}}/>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <InputBase
          placeholder="Search…"
          style={{ width: "50%", margin: "auto 50px", backgroundColor: "#f5f5f5",  borderRadius: "10px 10px 10px 10px"}}
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "black" }} />
              </InputAdornment>
            ),
            style: { color: "black", height:"40px", paddingLeft:"10px", },
          }}
        />
        <List style={{display:"flex" , width:"63px"}}>
          <ListItem button>
            <ListItemIcon>
              <RefreshOutlinedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SplitscreenOutlinedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
          </ListItem>
          <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.54)",
            borderRadius: "5px",
            display: "flex",
            padding: "8px",
            marginLeft:"25px"
          }}
        >
          <AccountCircleIcon fontSize="large" />
        </div>
      </List>
      
      </Toolbar>
    </AppBar>
  );
};
