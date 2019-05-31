import React from 'react';
import PropTypes from 'prop-types';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Add from '@material-ui/icons/Add';
import Settings from '@material-ui/icons/Settings';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Menu({ id, open, anchor }) {
  const classes = useStyles();

  return (
    <Popper id={id} open={open} anchorEl={anchor} transition className={classes.menuWrapper}>
      {
        ({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
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
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Fade>
        )
      }
    </Popper>
  );
};

Menu.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  anchor: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.array,
  ]),
};

Menu.defaultProps = {
  id: null,
  open: false,
  anchor: null,
};
