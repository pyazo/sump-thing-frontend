import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  common: {
    black: '#000',
    white: '#fff',
  },
  palette: {
    primary: indigo,
    secondary: {
      light: '#f1cc51',
      main: '#edb600',
      dark: '#daa800',
      contrastText: '#fff',
    },
    error: red,
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

export default theme;
