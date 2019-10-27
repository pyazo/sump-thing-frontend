import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import store from 'store';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';
import Loading from 'js/common/components/Loading';

import { signup } from 'js/redux/auth';

import style from './style';

const useStyles = makeStyles(style);

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const auth = useSelector((state) => state.auth);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = store.get('token');

    if (token) {
      dispatch(push('/dashboard'));
    }
  }, []);

  if (auth.loading) return <Loading />;

  return (
    <Grid container justify="center" align="center" className={classes.main}>
      <Header elevated />
      <Grid item lg={6} md={8} xs={10}>
        <Paper className={classes.paper}>
          <Typography align="center" variant="h4">
            Sign Up
          </Typography>

          {
              auth.error && (
                <Grid item xs={12}>
                  <Typography align="center" variant="subtitle2" className={classes.error}>
                    {auth.error}
                  </Typography>
                </Grid>
              )
            }

          <form onSubmit={() => dispatch(signup(firstName, lastName, email, password))}>
            <Grid container className={classes.formContainer}>
              <Grid item md={6} xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={firstName}
                  label="First Name"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12} className={classes.textFieldContainer}>
                <TextField
                  className={classes.textField}
                  value={lastName}
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
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
                  type={passwordVisible ? 'text' : 'password'}
                  InputProps={
                    {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
                            { passwordVisible ? <Visibility /> : <VisibilityOff /> }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                  }
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" className={classes.signup} type="submit">
              Sign Up
            </Button>
          </form>

          <Grid item xs={12}>
            <Typography align="center" variant="body2">
              <button
                onClick={() => dispatch(push('/login'))}
                className={classes.existingAccount}
                type="button"
              >
                Already have an account? Click here to login.
              </button>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
