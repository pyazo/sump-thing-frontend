import React from 'react';

import Grid from '@material-ui/core/Grid';
import CirculatProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <Grid item xs={12}>
      <Grid container justify="center" alignItems="center">
        <CirculatProgress />
      </Grid>
    </Grid>
  );
}
