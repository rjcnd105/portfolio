import { colors } from "../constants/colors";
import { theme } from "./theme";

const commonStyle = {
  title: {
    fontSize: '4rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color:'#444',
    marginBottom: '.6em',
    [theme.breakpoints.down("xs")]: {
      fontSize: '2.8rem'
    }
  },
  subTitle: {
    fontSize: '2.8rem',
    fontWeight: 100,
    color:'#444',
    marginBottom: '.8em',
    [theme.breakpoints.down("xs")]: {
      fontSize: '2.2rem'
    }
  },
  smallTitle: {
    fontSize: '1.5rem',
    // marginBottom: '.4em',
    // marginTop: '.6em',
    color:'#383838',
  },
  pfDot: {
    color: colors.Portfolio,
    fontSize: '2.8rem',
    lineHeight: '1.5rem'
  }
};



export default commonStyle;