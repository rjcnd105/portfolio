import { colors } from '../constants/colors';
import { theme } from './theme';

const commonStyle = {
  title: {
    fontSize: '2.75rem',
    fontWeight: 100,
    lineHeight: 1.25,
    letterSpacing: '-.125rem',
    color: '#444',
    marginBottom: '.4rem',
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem'
    }
  },
  subTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#444',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  },
  bigBody: {
    letterSpacing: '-.025rem',
    fontSize: '1rem',
    lineHeight: 1.8,
    fontWeight: 400,
    color: '#888',
    paddingBottom: '.6em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.9rem'
    }
  },
  middleBody: {
    fontSize: '.75rem',
    lineHeight: 1.45,
    fontWeight: 300,
    color: '#333',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.75rem'
    }
  },
  smallBody: {
    fontSize: '1rem',
    color: '#666',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.9rem'
    }
  },
  middleTitle: {
    fontSize: '1.25rem',
    marginBottom: '.3em',
    // marginTop: '.3em',
    color: '#444',
  },
  smallTitle: {
    fontSize: '1rem',
    marginTop: '.15em',
    marginBottom: 0,
    color: '#666',
  },
  pfDot: {
    color: colors.Project,
    fontSize: '2rem',
    lineHeight: '1.5rem'
  },
  subList: {
    fontFamily: "'Spoqa Han Sans', -apple-system, BlinkMacSystemFont, 'Gothic A1', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu'",
    '& li:before': {
      content:"'· '",
      marginRight: '4px',
      fontWeight: 'bold',
      display: 'inline',

    },
    '& li': {
      fontSize: '1rem',
      lineHeight: 1.8,
      paddingBottom: '.25em',
      fontWeight: 300,
    }
  }
};

export default commonStyle;
