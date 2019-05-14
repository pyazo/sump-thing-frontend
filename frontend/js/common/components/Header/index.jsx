import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Header({ elevated }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={`${classes.container} ${elevated && classes.elevated}`}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={4} xs={6}>
          <Typography align="center" variant="subtitle1">Sump Thing</Typography>
        </Grid>
        <Grid item sm={4} xs={6}>
          <Grid container justify="center">
            <Button color="secondary" variant="contained">
              Join Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  elevated: PropTypes.bool,
};

Header.defaultProps = {
  elevated: false,
};