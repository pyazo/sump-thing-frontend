import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

import Header from 'js/common/components/Header';
import Loading from 'js/common/components/Loading';
import { getCurrentUser } from 'js/redux/currentUser';

import TankList from './Widgets/TankList';

import style from './style';

const useStyles = makeStyles(style);

export default function Dashboard() {
  const classes = useStyles();

  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (currentUser.loading) {
    return <Loading />;
  }

  const { user } = currentUser;

  return (
    <Grid container>
      <Header elevated text="Dashboard" user={user} />
      <TankList />
    </Grid>
  );
}
