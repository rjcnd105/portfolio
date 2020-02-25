import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 860,
      lg: 1140,
      xl: 1920
    }
  },
  typography: {
    fontFamily: [
      '"Spoqa Han Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Gothic A1"',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
  },
});
