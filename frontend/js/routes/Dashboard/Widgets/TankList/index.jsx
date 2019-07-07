import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import style from './style';

import NewTankCard from '../NewTankCard';

const useStyles = makeStyles(style);

export default function TankList() {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Typography variant="h3" className={classes.title}>Tanks</Typography>
      <Grid item xs={12} className={classes.list}>
        <NewTankCard />
      </Grid>
    </Grid>
  );
}
