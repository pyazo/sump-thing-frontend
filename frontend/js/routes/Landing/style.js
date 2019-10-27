const styles = theme => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10),
    height: `calc(100vh - ${theme.spacing(8)}px)`,
  },
  title: {
    fontWeight: 700,
  },
  subtitle: {
    paddingTop: theme.spacing(5),
  },
  subtitleAccent: {
    paddingTop: theme.spacing(5),
    color: '#EDB600',
  },
  logo: {
    height: theme.spacing(18),
    marginBottom: theme.spacing(2),
  },
  joinBtn: {
    marginTop: theme.spacing(5),
    padding: '20 30px',
    fontSize: '1.5rem',
  }
});

export default styles;
