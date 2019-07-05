import { Container, Grid, Hidden, Box, Typography, Theme, Drawer } from '@material-ui/core/';
import React, { createRef, RefObject, UIEventHandler, useEffect, useState } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import ProjectView from "./ProjectView";
import Navigation from "./Navigation";
import SubContents from "./SubContents";
import { NavItems } from "../types";

const sideBarWidth = "44px";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      height: '100%',
      overflow: 'scroll',
      '-webkit-overflow-scrolling':'touch'
    },
    content: {
      transition: 'all .6s',
      width:'100%',
      [theme.breakpoints.up("md")]: {
        marginLeft: sideBarWidth,
        width: `calc(100% - ${sideBarWidth})`,
      }
    },
    sideNav: {
      transition: 'all .6s',
      position: 'fixed',
      left: 0, top: 0,
      width: 0,
      [theme.breakpoints.up("md")]: {
        width: sideBarWidth,
        display: 'block',
        height: '100%',
        // backgroundColor: colors.pointColors[0],

        flexShrink: 0
      }
    },
  })
});


const App: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [navItems, setNavItems] = useState<NavItems>();

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const parent = el.parentElement;
    const children = el.children[1].children;
    if (parent && children) {
      const top = el.scrollTop + parent.offsetHeight / 2;
    }
  };

  const handleChangeNav = (navItems: NavItems) => setNavItems(navItems);

  // useEffect(() => {
  //   console.log(contents);
  // }, []);

  const app =
    <Grid container spacing={0} className={classes.root} onScroll={onScroll}>
      <Navigation rootClass={classes.sideNav} navItems={navItems}/>
      <SubContents className={classes.content} handleChangeNav={handleChangeNav}/>
      <ProjectView/>
    </Grid>;

  return app;
};

export default App;
