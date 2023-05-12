export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#37474f',
          },
          secondary: {
            main: '#f57f17',
          },
          background: {
            paper: '#cfd8dc',
          },
        }
      : {
          primary: {
            main: '#eceff1',
          },
          secondary: {
            main: '#f57f17',
          },
          background: {
            paper: '#263238',
          },
        }),
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeightLight: 500,
    h1: {
      fontSize: 18,
      fontWeight: 800,
    },
    h2: {
      fontSize: 17,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  spacing: 8,
});
