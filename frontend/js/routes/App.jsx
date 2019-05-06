import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// This is an example theme, feel free to edit to your heart's desire...
// https://material-ui-1dab0.firebaseapp.com/customization/themes/
const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  static defaultProps = {
    children: [],
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* CSS Reset */}
        <CssBaseline />
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
