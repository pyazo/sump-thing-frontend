import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';

import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container>
      <Header />
      <Grid item xs={12} className={classes.main}>
        <Grid item md={7} sm={8} xs={12}>
          <Typography align="left" variant="h3">Your aquariums.</Typography>
          <Typography align="left" variant="h3">Totally online.</Typography>
        </Grid>
        <Grid item xs={12} className={classes.subtitle}>
          <Typography align="left" variant="subtitle1">See how our open source project can take your hobby or business to the next level.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
