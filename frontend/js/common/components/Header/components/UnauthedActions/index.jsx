import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function UnauthedActions() {
  const classes = useStyles(style);

  const dispatch = useDispatch();

  const toLogin = () => {
    dispatch(push('/login'));
  };

  const toSignup = () => {
    dispatch(push('/signup'));
  };

  return (
    <Grid item sm={4} xs={6}>
      <Grid container justify="center">
        <Button color="secondary" variant="contained" onClick={toSignup}>
          Join Now
        </Button>
        <Button className={classes.login} onClick={toLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}
