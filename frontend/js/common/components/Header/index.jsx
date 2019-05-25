import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import JoinButton from './components/JoinButton';
import UserMenu from './components/UserMenu';

import style from './style';

const useStyles = makeStyles(style);

export default function Header({ elevated, text }) {
  const classes = useStyles();

  const auth = useSelector(state => state.auth);

  return (
    <Grid item xs={12} className={`${classes.container} ${elevated && classes.elevated}`}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={4} xs={6}>
          <Typography align="center" variant="subtitle1">{text || 'Sump Thing'}</Typography>
        </Grid>
        { auth.isLoggedIn ? <UserMenu /> : <JoinButton /> }
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  elevated: PropTypes.bool,
  text: PropTypes.string,
};

Header.defaultProps = {
  elevated: false,
  text: '',
};
