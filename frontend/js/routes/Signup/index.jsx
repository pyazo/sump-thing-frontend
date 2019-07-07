import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';

import style from './style';

const useStyles = makeStyles(style);

export default function Signup() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  return (
    <Grid container justify="center" align="center" className={classes.main}>
      <Header elevated />
      <Grid item lg={6} md={8} xs={10}>
        <Paper className={classes.paper}>
          <Typography align="center" variant="h4">
            Sign Up
          </Typography>
          <form>
            <Grid container className={classes.formContainer}>
              <Grid item md={6} xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={first_name}
                  label="First Name"
                  name="first_name"
                  onChange={e => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={last_name}
                  label="Last Name"
                  name="last_name"
                  onChange={e => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={email}
                  label="Email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={password}
                  label="Password"
                  name="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" className={classes.signup}>
              Sign Up
            </Button>
          </form>

          <Grid item xs={12}>
            <Typography align="center" variant="body2" className={classes.existingAccount}>
              Already have an account? Click here to login.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
