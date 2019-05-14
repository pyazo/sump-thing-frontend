const style = theme => ({
  main: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
  },
  paper: {
    padding: `${theme.spacing(5)} ${theme.spacing(15)}`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    },
  },
  textField: {
    margin: '0 auto',
    display: 'block',
    width: theme.spacing(35),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  login: {
    width: theme.spacing(20),
    marginTop: theme.spacing(5),
  },
  trouble: {
    color: theme.palette.grey[600],
    cursor: 'pointer',
    marginTop: theme.spacing(1),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default style;
