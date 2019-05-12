import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  common: {
    black: '#000',
    white: '#fff',
  },
  palette: {
    primary: indigo,
    secondary: amber,
    error: red,
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

export default theme;
