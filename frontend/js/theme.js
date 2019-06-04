import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const baseTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: indigo,
    secondary: {
      light: '#f1cc51',
      main: '#edb600',
      dark: '#daa800',
      contrastText: '#fff',
    },
    error: red,
  },
};

export const light = createMuiTheme({
  ...baseTheme,
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

export const dark = createMuiTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    ...baseTheme.palette,
    background: {
      paper: '#455a64',
      default: '#37474f',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.14)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
});
