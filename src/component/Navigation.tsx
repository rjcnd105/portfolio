import React, { useEffect, createRef, RefObject } from 'react';
import { Drawer, Hidden, Theme, Box, Breadcrumbs, Paper, Link } from "@material-ui/core";
import { NavItems } from "../types";
import commonStyle from "../style/commonStyle";
import { colors } from "../constants/colors";
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      zIndex: 1,
      position: 'relative',
    },
    colorBar: {
      backgroundColor: colors.Portfolio,
      width: '4px',
      height: '100%',
    },
    pcNavInner: {
      position: 'absolute',
      left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(90deg)',
      '& .pc-nav-item':{
        opacity: .4,
        fontSize: '1.2rem',
        padding: '0 20px'
      }
    },
    ['Portfolio']: {
      '& .inner-box:before': { backgroundColor: colors.Portfolio }
    },
    ['Skills']: {
      '& .inner-box:before': { backgroundColor: colors.Skills }
    },
    ['Contact']: {
      '& .inner-box:before': { backgroundColor: colors.Contact }
    },
    ['Experiences']: {
      '& .inner-box:before': { backgroundColor: colors.Experiences }
    },
  }));


type Props = {
  rootClass?: string,
  navItems: NavItems,
  onItemClick?: <P>(props?: P) => void,
  changeActiveItem?: <P>(props?: P) => void,
}
const Navigation: React.FC<Props> = ({ rootClass, navItems }) => {
  const cls = useStyles();

  return (
    <nav className={`${rootClass} ${cls.navBar}`}>
      <Hidden smDown>
        <Box className={cls.colorBar}></Box>
        <Box className={cls.pcNavInner}>
          <Link href="/" className='pc-nav-item'>Home</Link>
          <Link href="/" className='pc-nav-item'>Portfolio</Link>
          <Link href="/" className='pc-nav-item'>Skills</Link>
          <Link href="/" className='pc-nav-item'>Skills</Link>
          <Link href="/" className='pc-nav-item'>Contact</Link>
        </Box>
        {/*<Drawer className={cls.navBar}></Drawer>*/}
      </Hidden>

    </nav>
  );
};

export default Navigation