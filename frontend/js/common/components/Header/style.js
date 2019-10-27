const style = (theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: theme.spacing(10),
  },
  logo: {
    height: theme.spacing(5),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  elevated: {
    boxShadow: theme.shadows[3],
    zIndex: theme.zIndex.appBar,
  },
});

export default style;
