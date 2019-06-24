import { Container, Grid, Hidden, Box, Typography, Theme, Drawer } from '@material-ui/core/';
import React from 'react';
import { ToyProjectGallery, WorkProjectGallery } from './ProjectGallery';
import ProjectViewFrame from './ProjectView';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import { colors } from '../constants/colors';
import ProjectView from "./ProjectView";

const sideBarWidth = "60px";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    content: {
      transition: 'all .6s',
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
        backgroundColor: colors.pointColor,

        flexShrink: 0
      }
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: 100,
      lineHeight: 1.15,
      marginBottom: '.6em'
    },
    subTitle: {
      fontSize: '2.4rem',
      fontWeight: 100,
      marginBottom: '.8em'
    },
    innerBox: {
      paddingTop: '14px',
      position: 'relative',
      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '30px',
        // minWidth:'40px',
        height: '4px',
        backgroundColor: colors.pointColor,
        top: 0,
        left: '-4px'
      }
    },
    sections: { width: '100%' },
    sec1: {}, sec2: {}, sec3: {
      '& .inner-box:before': {}
    }, sec4: {}, sec5: {}, sec6: {}

  })
});
const boxProperty = {
  // boxShadow: 1,
  // borderColor: colors.pointColor,
  // borderTop: 3,
  // paddingTop: 2,
  paddingBottom: 8,
};


const App: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const SubContentWrapper: React.FC<{ subTitle: string, className: string }> = ({ subTitle, className, children }) => <Box
    className={className}>
    <Container maxWidth="lg">
      <Box className={`inner-box ${classes.innerBox}`} {...boxProperty}>
        <Typography variant="h3" gutterBottom className={`subtitle ${classes.subTitle}`}>
          {subTitle}
        </Typography>
        {children}
      </Box>
    </Container>
  </Box>;

  return (
    <Grid container spacing={0} className={classes.root}>
      <nav className={classes.sideNav}>
        <Hidden smUp>
          <Drawer></Drawer>
        </Hidden>

      </nav>
      <Grid className={classes.content}>
        <Box className={`${classes.sections} ${classes.sec1}`}>
          <Container maxWidth="lg">
            <Box paddingTop={4} paddingBottom={4}>
              <Typography variant="h2" gutterBottom className={classes.title}>
                반갑습니다.
                <br/>
                저는 김회준입니다.
              </Typography>
              {/*<p>2년간 스크립터로써 일했으며 사용자의 편의성과 </p>*/}
              <Typography variant={"body1"}>
                주저리 주저리
              </Typography>
            </Box>
          </Container>
        </Box>

        <SubContentWrapper subTitle="Work Projects" className={`${classes.sections} ${classes.sec2}`}>
          <WorkProjectGallery/>
        </SubContentWrapper>

        <SubContentWrapper subTitle="Toy Project" className={`${classes.sections} ${classes.sec3}`}>
          <ToyProjectGallery/>
        </SubContentWrapper>

        <SubContentWrapper subTitle="Skills" className={`${classes.sections} ${classes.sec4}`}>
        </SubContentWrapper>

        <SubContentWrapper subTitle="Other Experiences" className={`${classes.sections} ${classes.sec5}`}>
        </SubContentWrapper>

        <SubContentWrapper subTitle="Contatct" className={`${classes.sections} ${classes.sec6}`}>
        </SubContentWrapper>
      </Grid>
      <ProjectView/>
    </Grid>
  );
};

export default App;
