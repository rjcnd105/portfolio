import React, { useEffect, createRef, RefObject, useState } from 'react';
import { Drawer, Hidden, Theme, Box, Breadcrumbs, Paper, Link, ButtonBase } from "@material-ui/core";
import { NavItems } from "../types";
import { colors } from "../constants/colors";
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      zIndex: 1,
      position: 'relative',
    },
    colorBar: {
      // backgroundColor: colors.Project,
      width: '4px',
      height: '100%',
      '&.introduce': {
        backgroundColor: colors.Introduce
      },
      '&.portfolio': {
        backgroundColor: colors.Project
      },
      '&.skills': {
        backgroundColor: colors.Skills
      },
      '&.contact': {
        backgroundColor: colors.Contact
      },
      '&.experiences': {
        backgroundColor: colors.Experiences
      },
    },
    pcNavInner: {
      position: 'absolute',
      left: '50%', top: '50%',
      transform: 'translate(-50%, -50%) rotate(90deg)',
      transformOrigin: '50% 25%',
      color: '#333',
      '& .pc-nav-item': {
        transition: '.6s all',
        opacity: .27,
        fontSize: '1.2rem',
        padding: '0 20px',
        display: 'inline'
      },
      '& .pc-nav-item.pc-nav-item--active': {
        opacity: .9
      },
    },
  }));


type Props = {
  rootClass?: string,
  onItemClick?: (name: string) => void,
  changeActiveItem?: (el: HTMLButtonElement) => void,
  navItems: string[],
}
const Navigation: React.FC<Props> = ({ rootClass, onItemClick, navItems }) => {
  const cls = useStyles();

  console.log(navItems);
  const handleItemClick = (name: string) => () => {
    if (onItemClick) {
      onItemClick(name);
    }
  };

  const [activeItem, setActiveItem] = useState<string>(navItems[0]);
  return (
    <>
      {
        (navItems.length > 0) &&
          <nav className={`${rootClass} ${cls.navBar}`}>
            <Hidden smDown>
              <Box className={`${cls.colorBar} ${activeItem.toLowerCase()}`}/>
              <Box className={cls.pcNavInner}>
                {
                  navItems.map((v, i) =>
                    <ButtonBase href="/" className={`pc-nav-item ${v === activeItem && 'pc-nav-item--active'}`}
                                onClick={handleItemClick(v)}>{v}</ButtonBase>)
                }
              </Box>
              {/*<Drawer className={cls.navBar}></Drawer>*/}
            </Hidden>
          </nav>
      }
    </>
  );
};

export default Navigation