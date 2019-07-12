import { colors } from "../constants/colors";
import { theme } from "./theme";

const commonStyle = {
  title: {
    fontSize: '3.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#444',
    marginBottom: '.4em',
    [theme.breakpoints.down("xs")]: {
      fontSize: '2.8rem'
    }
  },
  subTitle: {
    fontSize: '2.9rem',
    fontWeight: 100,
    color: '#444',
    [theme.breakpoints.down("xs")]: {
      fontSize: '2.4rem'
    }
  },
  bigBody: {
    fontSize: '2rem',
    lineHeight: 1.45,
    fontWeight: 100,
    color: '#444',
    paddingBottom: '.6em',
    [theme.breakpoints.down("xs")]: {
      fontSize: '1.7rem'
    }
  },
  middleBody: {
    fontSize: '1.3rem',
    lineHeight: 1.45,
    fontWeight: 300,
    color: '#333',
    [theme.breakpoints.down("xs")]: {
      fontSize: '1.2rem'
    }
  },
  smallBody: {
    fontSize: '1rem',
    color: '#666',
    [theme.breakpoints.down("xs")]: {
      fontSize: '.9rem'
    }
  },
  middleTitle: {
    fontSize: '1.8rem',
    marginBottom: '.3em',
    // marginTop: '.3em',
    color: '#444',
  },
  smallTitle: {
    fontSize: '1.5rem',
    marginBottom: '.3em',
    marginTop: '.15em',
    color: '#444',
  },
  pfDot: {
    color: colors.Project,
    fontSize: '2.8rem',
    lineHeight: '1.5rem'
  },
  subList: {
    fontFamily: "'Spoqa Han Sans', -apple-system, BlinkMacSystemFont, 'Gothic A1', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu'",
    '& li:before': {
      content:"'· '",
      display: 'inline',

    },
    '& li': {
      paddingBottom: '.2em',
      fontWeight: 300,

    }
  }
};


export default commonStyle;