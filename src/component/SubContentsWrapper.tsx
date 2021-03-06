import { Box, Container, Grid, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import { colors } from '../constants/colors';
import commonStyle from '../style/commonStyle';
import { ContentNames } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '24px',
    },
    title: commonStyle.title,
    subTitle: commonStyle.subTitle,
    innerBox: {
      paddingTop: '14px',
      position: 'relative',
      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '32px',
        // minWidth:'40px',
        height: '4px',
        top: '-4px',
        left: '-1px'
      }
    },

    Introduce: {
      '& .inner-box:before': { backgroundColor: colors.Project }
    },
    Project: {
      '& .inner-box:before': { backgroundColor: colors.Project }
    },
    Skills: {
      '& .inner-box:before': { backgroundColor: colors.Skills }
    },
    Contact: {
      '& .inner-box:before': { backgroundColor: colors.Contact }
    },
    Experiences: {
      '& .inner-box:before': { backgroundColor: colors.Experiences }
    },
  }));

type Props = { subTitle: string, name?: ContentNames };
const SubContentsWrapper: React.FC<Props> = ({ subTitle, children, name }) => {

  const classes = useStyles();

  const boxProperty = {
    paddingBottom: 8,
  };

  return <Grid
    className={`${name && classes[name]} ${classes.root}`} id={name} >
    <Container maxWidth="lg">
      <Box className={`inner-box ${classes.innerBox}`} {...boxProperty}>
        <Typography variant="h3" className={`subtitle ${classes.subTitle}`}>
          {subTitle}
        </Typography>
        {children}
      </Box>
    </Container>
  </Grid>
};

export default SubContentsWrapper;
