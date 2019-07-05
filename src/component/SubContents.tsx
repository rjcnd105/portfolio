import React, { createRef, RefObject, useEffect, useState } from 'react';
import { Box, Container, Grid, Theme, Typography } from "@material-ui/core";

import { ToyProjectGallery, WorkProjectGallery } from "./ProjectGallery";
import { GridProps } from "@material-ui/core/Grid";
import { NavItems } from "../types";
import SubContentWrapper from './SubContentsWrapper';
import commonStyle from '../style/commonStyle';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme: Theme) => commonStyle);

type Props = GridProps & {
  handleChangeNav: (navItem: NavItems) => void
};

const SubContents: React.FC<Props> = (props) => {
  const classes = useStyle();

  let pfRef = createRef();
  let skRef = createRef();
  let exRef = createRef();
  let ctRef = createRef();

  let navItems: NavItems;

  useEffect(()=>{
    navItems = [
      ['Portfolio', pfRef],
      ['Skills', skRef],
      ['Experiences', exRef],
      ['Contact', ctRef],
    ];
    props.handleChangeNav(navItems);
  },[]);

  return (
    <Grid {...props}>
      <Box>
        <Container maxWidth="lg">
          <Box paddingTop={4} paddingBottom={4} letterSpacing={1}>
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

      <SubContentWrapper subTitle="Work Projects" name="Portfolio" elemRef={(el: any) => pfRef = el}>
        <WorkProjectGallery/>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Toy Project" name="Portfolio">
        <ToyProjectGallery/>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Skills"  name="Skills" elemRef={(el: any) => skRef = el}>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Other Experiences" name="Experiences" elemRef={(el: any) => exRef = el}>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Contact" name="Contact" elemRef={(el: any) => ctRef = el}>
      </SubContentWrapper>
    </Grid>
  );
};

export default SubContents;