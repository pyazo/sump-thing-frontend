import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const [count, setCount] = useState(0);

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.main}>
        <Typography variant="h5">React Prototype App</Typography>
        <br />
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Typography variant="subtitle2">{count}</Typography>
      </Grid>
    </Grid>
  );
}
