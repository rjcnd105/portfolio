import { Box, Container, Grid, Theme, Typography } from "@material-ui/core";
import React, { RefObject } from "react";
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import commonStyle from "../style/commonStyle";
import { colors } from "../constants/colors";
import { ContentNames } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: commonStyle.title,
    subTitle: commonStyle.subTitle,
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
        top: 0,
        left: '-4px'
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

type Props = { subTitle: string, name: ContentNames, elemRef?: (el:any) => RefObject<React.ReactElement> };
const SubContentsWrapper: React.FC<Props> = ({ subTitle, children, name, elemRef }) => {

  const classes = useStyles();

  const boxProperty = {
    paddingBottom: 8,
  };

  return <Grid
    className={`${name ? classes[name] : ''} `} ref={elemRef} >
    <Container maxWidth="lg">
      <Box className={`inner-box ${classes.innerBox}`} {...boxProperty}>
        <Typography variant="h3" gutterBottom className={`subtitle ${classes.subTitle}`}>
          {subTitle}
        </Typography>
        {children}
      </Box>
    </Container>
  </Grid>
};

export default SubContentsWrapper;