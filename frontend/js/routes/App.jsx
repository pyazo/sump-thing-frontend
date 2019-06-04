import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/styles';

import * as themes from 'js/theme';

export default function App({ children }) {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={themes[theme.current]}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}


App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
};
