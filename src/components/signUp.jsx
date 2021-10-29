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
import image from "../assets/google_image.svg";
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

const Registration = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmError(false);
    if (firstName === "") setFirstNameError(true);
    if (lastName === "") setLastNameError(true);
    if (email === "") setEmailError(true);
    if (password === "") setPasswordError(true);
    if (password !== confirmPass) setConfirmError(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={10} className="paperReg">
        <Grid container className="gridPad">
          <Grid item container xs={8} spacing={2}>
            <div className="divTitle">
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
            <Typography variant="body1" style={{ marginTop: "17px" }}>
              Create your fundooNotes Account
            </Typography>

            <div className="divName">
              <TextField
                error={firstNameError}
                name="firstname"
                label="First name"
                variant="outlined"
                size="small"
                helperText={firstNameError ? "First name cannot be empty" : ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                error={lastNameError}
                label="Last name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                helperText={lastNameError ? "Last name cannot be empty" : ""}
              />
            </div>

            <TextField
              error={emailError}
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
              helperText={emailError ? "Email cannot be empty" : ""}
            />

            <Button className={classes.btn}>
              Use my current email address instead
            </Button>

            <div className="divPassword">
              <TextField
                error={passwordError}
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                helperText={
                  passwordError
                    ? "Password cannot be empty"
                    : "Use 8 or more characters"
                }
              />
              <TextField
                error={confirmError}
                type={showPassword ? "text" : "password"}
                label="Confirm"
                variant="outlined"
                size="small"
                onChange={(e) => setConfirmPass(e.target.value)}
                helperText={confirmError ? "Password does not match" : ""}
              />
            </div>
            <FormControlLabel
              control={<Checkbox />}
              label="Show password"
              style={{ marginTop: "20px" }}
              onClick={handleClickShowPassword}
            ></FormControlLabel>
            <Button
              className={classes.signInButton}
              component={Link}
              to="/login"
            >
              Sign in instead
            </Button>
            <Button
              onClick={() => console.log("clicked me")}
              type="submit"
              variant="contained"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </Grid>
          <Grid item container xs={4}>
            <img src={image} alt="" />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Registration;
