const style = theme => ({
  main: {
    width: theme.sizes.card.width,
    height: theme.sizes.card.height,
  },
  card: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: theme.palette.grey[600],
    width: theme.sizes.card.width / 5,
    height: theme.sizes.card.height / 5,
  },
});

export default style;
