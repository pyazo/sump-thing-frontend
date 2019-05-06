import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import style from './style';

// Pull in our styles from the styles.js file
@withStyles(style)
export default class Home extends Component {
  static propTypes = {
    // Be sure to use prop types, typing is important to be sure you are
    // getting the props that you want
    classes: PropTypes.object.isRequired,
  }
  // Set the default state
  state = { count: 0 };

  // Arrow functions keep context allowing us to call `this`
  // and know we are reffering to the right thing.
  incrementCount = () => {
    const { count } = this.state;
    // Increment the count
    this.setState({ count: count + 1 });
  }

  render() {
    // Access our styles
    const { classes } = this.props;
    // Access the component state
    const { count } = this.state;

    return (
      <Grid container className={classes.main}>
        <Grid item xs={12}>
          <Typography variant="headline">React Prototype App</Typography>
          <br />
          {/* Since this.incrementCounter returns a function we can just pass it in */}
          <Button variant="raised" onClick={this.incrementCount}>Increment</Button>
          <Typography variant="subheading">{count}</Typography>
        </Grid>
      </Grid>
    );
  }
}
