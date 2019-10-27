import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Add from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function NewTankCard() {

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <ButtonBase onClick={() => dispatch(push('/dashboard/tank/new'))}>
      <Card className={classes.main}>
        <Grid container justify="center" alignItems="center" className={classes.main}>
          <Grid item>
            <Add className={classes.icon} />
            <Typography variant="body1">
              Add New Tank
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </ButtonBase>
  );
}