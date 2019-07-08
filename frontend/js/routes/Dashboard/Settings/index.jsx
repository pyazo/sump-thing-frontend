import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

import Brightness3 from '@material-ui/icons/Brightness3';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';
import Loading from 'js/common/components/Loading';

import { toggleTheme } from 'js/redux/theme';
import { getCurrentUser } from 'js/redux/currentUser';

import style from './style';

const useStyles = makeStyles(style);

export default function Settings() {
  const theme = useSelector(state => state.theme);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const classes = useStyles();

  const isDarkMode = theme.current === 'dark';

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (currentUser.loading) return <Loading />;

  const { user } = currentUser;

  return (
    <Grid container justify="center">
      <Header elevated user={user} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h3" align="center" className={classes.pageTitle}>Settings</Typography>
      </Grid>

      <Grid item xs={10} sm={8} md={6}>
        <Paper>
          <List subheader={<ListSubheader>Display</ListSubheader>}>
            <ListItem>
              <ListItemIcon><Brightness3 /></ListItemIcon>
              <ListItemText id="switch-list-label-dark-mode" primary="Dark Mode" />
              <ListItemSecondaryAction>
                <Switch
                  checked={isDarkMode}
                  onChange={() => dispatch(toggleTheme())}
                  value="darkMode"
                  inputProps={{ 'aria-labelledby': 'switch-list-label-dark-mode' }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
