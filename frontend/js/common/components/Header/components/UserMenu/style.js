const style = theme => ({
  button: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(-1),
    borderRadius: theme.spacing(0.5),
  },
  name: {
    paddingTop: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
  },
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    fontSize: '1rem',
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  arrow: {
    marginBottom: theme.spacing(-1),
  },
});

export default style;
