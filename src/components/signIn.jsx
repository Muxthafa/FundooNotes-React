import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  TextField,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import "../css/style.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btn: {
    color: "#4285F4",
    marginTop: "20px",
    textTransform: "none",
  },
  signInButton: {
    color: "#4285F4",
    marginTop: "20px",
    textTransform: "none",
    marginRight: "200px",
  },
  submitButton: {
    background: "#4285F4",
    margin: "30px 0px 20px",
  },
});

const Signin = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={10} className="paperLogin">
        <Grid container className="gridPad">
          <Grid item container xs={12}>
            <div className="divTitleLogin">
              <span style={{ color: "blue" }}>F</span>
              <span style={{ color: "red" }}>u</span>
              <span style={{ color: "yellow" }}>n</span>
              <span style={{ color: "blue" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "red" }}>o</span>
              <span style={{ color: "blue" }}>N</span>
              <span style={{ color: "orange" }}>o</span>
              <span style={{ color: "indigo" }}>t</span>
              <span style={{ color: "red" }}>e</span>
              <span style={{ color: "yellow" }}>s</span>
            </div>

            <Typography variant="h5" style={{ margin: "17px 0px 0px 190px" }}>
              Sign In
            </Typography>

            <Typography
              variant="body1"
              style={{ margin: "17px 0px 0px 115px" }}
            >
              Use your FundooNotes Account
            </Typography>

            <TextField
              label="Username"
              variant="outlined"
              style={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">@gmail.com</InputAdornment>
                ),
              }}
              fullWidth
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="divPassword">
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                size="small"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <FormControlLabel
              control={<Checkbox />}
              label="Show password"
              style={{ marginTop: "20px" }}
              onClick={handleClickShowPassword}
            />

            <Button className={classes.signInButton} component={Link} to="/">
              Create Account
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={classes.submitButton}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Signin;
