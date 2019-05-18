import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';

import style from './style';

const useStyles = makeStyles(style);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Header elevated text="Dashboard" />
      Welcome to your dashboard.
    </Grid>
  );
}