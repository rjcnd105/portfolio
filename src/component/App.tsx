import { Grid, Theme } from '@material-ui/core/';
import React, { useRef, useState } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import ProjectView from "./ProjectView";
import Navigation from "./Navigation";
import SubContents from "./SubContents";
import scrollAnimate from "../util/scrollAnimate";

const sideBarWidth = "50px";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      height: '100%',
      overflowY: 'scroll',
      overflowX: 'hidden',
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
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const appRef = React.createRef<HTMLElement>();
  let navArr: HTMLElement[];

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if(appRef && appRef.current){
      const st = appRef.current.scrollTop + appRef.current.offsetHeight * .4;
      if(!navArr) {
        navArr = navItems.map(v => appRef && appRef.current && appRef.current.querySelector('#' + v) || document.createElement('div'));
      }
      else {
        let currItemIdx;
        for (let i = navArr.length - 1; i >= 0; i--) {
          currItemIdx = navArr[i].offsetTop < st && i;
          if(currItemIdx){
            break;
          }
        }
        if(currItemIdx !== undefined && typeof currItemIdx !== "boolean") {
          setActiveIdx(currItemIdx);
        }
      }
    }
  };


  const onNavClick = (idx: number) => {
    if(navArr && appRef && appRef.current){
      scrollAnimate(appRef.current, navArr[idx].offsetTop, 400)
    }
  };
  const app =
    <Grid container spacing={0} className={classes.root} onScroll={onScroll} ref={appRef}>
      <Navigation rootClass={classes.sideNav} navItems={navItems} activeIdx={activeIdx} onItemClick={onNavClick}/>
      <SubContents className={classes.content}/>
      <ProjectView/>
    </Grid>;

  return app;
};

export default App;
