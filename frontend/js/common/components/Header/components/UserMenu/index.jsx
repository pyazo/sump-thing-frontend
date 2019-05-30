import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function UserMenu({ user }) {
  const classes = useStyles();

  const avatar = `${user.first_name[0]}${user.last_name[0]}`;

  return (
    <Grid item sm={4} xs={6}>
      <Grid container justify="center">
        <Avatar className={classes.avatar}>{avatar}</Avatar>
        <Typography variant="body1" className={classes.name}>
          {user.first_name} {user.last_name}
        </Typography>
      </Grid>
    </Grid>
  );
}

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
};
