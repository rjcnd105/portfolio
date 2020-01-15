import { Box, ButtonBase, Hidden, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import { colors } from '../constants/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      zIndex: 1,
      position: 'relative',
    },
    barWrap: {
      position: 'relative',
      height: '100%',
    },
    colorBar: {
      position: 'absolute',
      width: '6px',
      height: '100%',
      transition: '.2s all',
      '&.introduce': {
        backgroundColor: colors.Introduce
      },
      '&.project': {
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
      display: 'flex',
      left: '50%', top: '50%',
      transform: 'translate(-50%, -50%) rotate(90deg)',
      transformOrigin: '50% 40%',
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
  onItemClick?: (name: number) => void,
  changeActiveItem?: (el: HTMLButtonElement) => void,
  navItems: string[],
  activeIdx: number
}
const Navigation: React.FC<Props> = ({ rootClass, onItemClick, navItems, activeIdx }) => {
  const cls = useStyles();

  const handleItemClick = (idx: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onItemClick) {
      onItemClick(idx);
    }
  };

  return (
    <>
      {
        (navItems.length > 0) &&
          <nav className={`${rootClass} ${cls.navBar}`}>
            <Hidden smDown={true}>
              <Box className={cls.barWrap}>
                <Box className={`${cls.colorBar} ${navItems[activeIdx].toLowerCase()}`}/>
              </Box>
              <Box className={cls.pcNavInner}>
                {
                  navItems.map((v, i) =>
                    <ButtonBase key={v}
                                href="/"
                                className={`pc-nav-item ${i === activeIdx ? 'pc-nav-item--active' : ''}`}
                                onClick={handleItemClick(i)}>{v}</ButtonBase>)
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
