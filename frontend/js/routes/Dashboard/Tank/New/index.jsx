import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Header from 'js/common/components/Header';

import SaltOrFresh from './steps/SaltOrFresh';

export default function New() {
  const currentStep = useSelector(state => state.newTank.currentStep);

  const steps = [
    <SaltOrFresh />,
  ];

  return (
    <Grid container>
      <Header />
      { steps[currentStep] }
    </Grid>
  );
}
