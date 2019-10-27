import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';

import LightLogo from 'img/logo-light.svg';

import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toSignup = () => {
    dispatch(push('/signup'));
  };

  return (
    <Grid container>
      <Header />
      <Grid item xs={12} className={classes.main}>
        <Grid item sm={8} xs={12}>
          <Typography align="left" variant="h2" className={classes.title}>Your aquariums,</Typography>
          <Typography align="left" variant="h2" className={classes.title}>totally online.</Typography>
        </Grid>
        <Grid item sm={8} xs={10} className={classes.subtitle}>
          <Typography align="left" variant="h4">Receive alerts in real time. Control your aquarium from anywhere.</Typography>
        </Grid>
        <Grid item sm={8} xs={10} className={classes.subtitleAccent}>
          <Typography align="left" variant="h4">See how our open source project can take your hobby or business to the next level.</Typography>
        </Grid>
        <Grid item xs={12}>
        <Button color="secondary" variant="contained" size="large" className={classes.joinBtn} onClick={toSignup}>
          Join Now
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
