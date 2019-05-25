import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function JoinButton() {
  return (
    <Grid item sm={4} xs={6}>
      <Grid container justify="center">
        <Button color="secondary" variant="contained">
        Join Now
        </Button>
      </Grid>
    </Grid>
  );
}
