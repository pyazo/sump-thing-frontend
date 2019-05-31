import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

import { makeStyles } from '@material-ui/styles';

import Menu from './subComponents/Menu';
import style from './style';

const useStyles = makeStyles(style);

export default function UserMenu({ user }) {
  const classes = useStyles();

  const [anchor, setAnchor] = useState();

  const menuOpen = Boolean(anchor);

  const avatar = `${user.first_name[0]}${user.last_name[0]}`;

  const toggleMenu = (e) => {
    setAnchor(anchor ? null : e.currentTarget);
  };

  const handleClose = () => setAnchor(null);

  const getArrow = () => {
    if (!menuOpen) return <ArrowDropDown className={classes.arrow} />;

    return <ArrowDropUp className={classes.arrow} />;
  };

  return (
    <Grid item sm={4} xs={6}>
      <Grid container justify="center">
        <ButtonBase className={classes.button} onClick={toggleMenu}>
          <Avatar className={classes.avatar}>{avatar}</Avatar>
          <Typography variant="body1" className={classes.name}>
            {`${user.first_name}${user.last_name}`}
            { getArrow() }
          </Typography>
        </ButtonBase>
        <Menu id="test" open={menuOpen} anchor={anchor} handleClose={handleClose} />
      </Grid>
    </Grid>
  );
}

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
};
