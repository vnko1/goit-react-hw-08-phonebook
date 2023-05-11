export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#455a64',
          },
          secondary: {
            main: '#447cbb',
            light: '#cfd8dc',
          },
          background: {
            default: '#b0bec5',
            paper: '#e0e0e0',
          },
          text: {
            primary: 'rgba(90,88,88,0.87)',
            secondary: 'rgba(4,4,4,0.6)',
            disabled: 'rgba(158,156,156,0.38)',
          },
        }
      : {
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
          text: {
            primary: '#e2dcdc',
            secondary: 'rgba(206,200,200,0.7)',
          },
          background: {
            default: '#031841',
            paper: '#0e0e3b',
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
    },
  },
  spacing: 8,
});
