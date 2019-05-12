import { createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  common: {
    black: '#000',
    white: '#fff',
  },
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

export default theme;
