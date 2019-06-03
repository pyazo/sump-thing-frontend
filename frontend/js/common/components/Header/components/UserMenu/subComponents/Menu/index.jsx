import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Add from '@material-ui/icons/Add';
import Settings from '@material-ui/icons/Settings';
import Logout from 'js/common/icons/Logout';

import { makeStyles } from '@material-ui/styles';

import { logout } from 'js/redux/auth';

import style from './style';

const useStyles = makeStyles(style);

export default function Menu({
  id, open, anchor, handleClose,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Popper id={id} open={open} anchorEl={anchor} transition className={classes.menuWrapper}>
      {
        ({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <Add />
                    </ListItemIcon>

                    Register new system
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>

                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>
                    <ListItemIcon>
                      <Logout className={classes.logout} />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )
      }
    </Popper>
  );
}

Menu.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  anchor: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.array,
  ]),
  handleClose: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  id: null,
  open: false,
  anchor: null,
};
