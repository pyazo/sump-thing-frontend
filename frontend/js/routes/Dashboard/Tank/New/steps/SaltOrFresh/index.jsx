import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/styles/makeStyles';

import Fresh from 'img/tanks/fresh.svg';
import Salt from 'img/tanks/salt.svg';

import style from './style';

const useStyles = makeStyles(style);

export default function SaltOrFresh() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          What kind of water?
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <img
          src={Salt}
          alt="Choose saltwater tank"
          className={classes.tank}
        />
        <Typography variant="body1" align="center">
          Salt Water
        </Typography>
      </Grid>

      <Grid item md={6} xs={12}>
        <img
          src={Fresh}
          alt="Choose freshwater tank"
          className={classes.tank}
        />

        <Typography variant="body1" align="center">
          Fresh Water
        </Typography>
      </Grid>
    </Grid>
  );
}
