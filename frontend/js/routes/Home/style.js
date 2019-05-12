const styles = theme => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10),
    height: `calc(100vh - ${theme.spacing(8)}px)`,
  },
  subtitle: {
    paddingTop: theme.spacing(5),
  },
});

export default styles;
