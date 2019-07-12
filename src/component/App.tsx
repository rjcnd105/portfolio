import { Grid, Theme } from '@material-ui/core/';
import React, { useState } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import ProjectView from "./ProjectView";
import Navigation from "./Navigation";
import SubContents from "./SubContents";

const sideBarWidth = "50px";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      height: '100%',
      overflow: 'scroll',
      '-webkit-overflow-scrolling': 'touch'
    },
    content: {
      transition: 'all .6s',
      width: '100%',
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
        flexShrink: 0
      }
    },
  })
});


const App: React.FC = () => {
  const classes = useStyles();
  const navItems = ['Introduce', 'Project', 'Skills', 'Experiences', 'Contact'];

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const top = el.offsetTop + el.offsetHeight * .5;
  };

  // useEffect(() => {
  //   console.log(contents);
  // }, []);

  const onNavClick = () => {
  };
  const app =
    <Grid container spacing={0} className={classes.root} onScroll={onScroll}>
      <Navigation rootClass={classes.sideNav} navItems={navItems} onItemClick={onNavClick}/>
      <SubContents className={classes.content}/>
      <ProjectView/>
    </Grid>;

  return app;
};

export default App;
