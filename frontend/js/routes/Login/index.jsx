import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import store from 'store';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';
import Loading from 'js/common/components/Loading';

import { login } from 'js/redux/auth';

import style from './style';

const useStyles = makeStyles(style);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = store.get('token');

    if (token) {
      dispatch(push('/dashboard'));
    }
  }, []);

  if (auth.loading) {
    return <Loading />;
  }

  return (
    <Grid container justify="center" align="center" className={classes.main}>
      <Header elevated />
      <Grid item lg={6} md={8} xs={10}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Typography align="center" variant="h4">
                Login
              </Typography>
            </Grid>

            {
              auth.error && (
                <Grid item xs={12}>
                  <Typography align="center" variant="subtitle2" className={classes.error}>
                    {auth.error}
                  </Typography>
                </Grid>
              )
            }

            <form onSubmit={() => dispatch(login(email, password))}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  value={email}
                  label="Email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
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

              <Grid item>
                <Button color="primary" variant="contained" className={classes.login} type="submit">
                Login
                </Button>
              </Grid>
            </form>

            <Grid item xs={12}>
              <Typography align="center" variant="body2" className={classes.trouble}>
                Forgot Password
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
