import React, { useState } from 'react';
import PropTypes from 'prop-types';

import store from 'store';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';
import Loading from 'js/common/components/Loading';
import api from 'js/api';

import style from './style';

const useStyles = makeStyles(style);

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const classes = useStyles();

  const login = async () => {
    try {
      setLoading(true);
      setError();

      const resp = await api.login(email, password);

      if (resp.data.error) {
        setError(resp.data.error_description);
        setLoading(false);

        return;
      }

      store.set('token', resp.data.access_token);

      history.push('/dashboard');
    } catch (err) {
      console.error(err);

      setError('Internal server error.');
      setLoading(false);
    }
  };

  if (loading) {
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
              error && (
                <Grid item xs={12}>
                  <Typography align="center" variant="subtitle2" className={classes.error}>
                    {error}
                  </Typography>
                </Grid>
              )
            }

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
              <Button color="primary" variant="contained" className={classes.login} onClick={login}>
                Login
              </Button>
            </Grid>

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

Login.propTypes = {
  history: PropTypes.object.isRequired,
};
