import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import style from './style';

function Home({ classes }) {
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid item xs={12} className={classes.main}>
        <Typography variant="h5">React Prototype App</Typography>
        <br />
        <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
        <Typography variant="subtitle2">{count}</Typography>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);
