import { Box, Container, Grid,  List, Theme, Typography } from '@material-ui/core';
import React from 'react';

import { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../constants/colors';
import commonStyle from '../style/commonStyle';
import { NavItems } from '../types';
import Email from './icons/Email';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import { ToyProjectGallery, WorkProjectGallery } from './ProjectGallery';
import SubContentWrapper from './SubContentsWrapper';

// @ts-ignore
const useStyle = makeStyles((theme: Theme) => ({
  ...commonStyle,
  contact: {
    marginTop: '36px',
    textAlign: 'center',

    '& .icon-wrap': {
      margin: '0 auto',
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  icon: {
    width: '2em', height: '2em', color: colors.Contact
  }
}));

type Props = GridProps & {
  handleChangeNav?: (navItem: NavItems) => void
};

const SubContents: React.FC<Props> = (props) => {
  const classes = useStyle();
  const subBoxTitleProps = {
    padding: 4,
    paddingLeft: 0,
    borderBottom: '1px solid #eee',
  };

  const SubList: React.FC<{ title: string }> = ({ title, children }) => <Box {...subBoxTitleProps}>
    <Typography className={classes.middleTitle}>{title}</Typography>
    <Box className={classes.middleBody}>
      <List className={classes.subList}>
        {children}
      </List>
    </Box>
  </Box>;

  const DateContent: React.FC<{ date: string, title: string }> = ({ date, title, children }) =>
    <Box {...subBoxTitleProps}>
      <Box>
        <Typography gutterBottom={true} className={classes.smallTitle} style={{ color: '#b4b4b4' }}>{date}</Typography>
      </Box>
      <Box>
        <Typography className={classes.middleTitle}>{title}</Typography>
        <Typography className={classes.smallBody}>{children && <br/>}{children}</Typography>
      </Box>
    </Box>;

  return (
    <Grid {...props} id="Introduce">
      <Box>
        <Container maxWidth="lg">
          <Box paddingTop={4} paddingBottom={5} letterSpacing={1}>
            <Typography variant="h2" className={classes.title}>
              반갑습니다.
              <br/>
              저는 김회준입니다.
            </Typography>
            <Box paddingTop={4}>
              <Typography variant={'body1'} className={classes.bigBody}>
                React, Typescript를 통해 재사용 가능하고 직관적인 개발을 선호합니다.<br/>
                웹 인터렉션 디자인을 좋아하며 더 나은 사용자 경험을 만들어내는 것에 행복함을 느낍니다. <br/>
                최근 <a href='https://graphql.org/' target='_blank'>Graphql</a>, <a href='https://ramdajs.com/' target='_blank'>ramda</a>, <a href='https://www.protopie.io/' target='_black'>protopie</a>, <a href='https://en.wikipedia.org/wiki/Domain-driven_design' target='_black'>DDD</a>, <a href='https://redux-observable.js.org/' target='_black'>redux-observable</a> 에 큰 관심을 가지고 있습니다.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <SubContentWrapper subTitle="Work Projects" name="Project">
        <WorkProjectGallery/>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Toy Project">
        <ToyProjectGallery/>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Skills" name="Skills">
        <Box paddingTop={4} paddingBottom={2}>
          <SubList title="Overall">
            <li>직관적이고 사용자 편의성을 중시한 UI나 로직을 선호합니다.</li>
            <li>업무에 필요하다면 익숙한 분야가 아니더라도 찾아봄으로써 더 최적의 결과를 낼 수 있도록 노력합니다.</li>
            <li>최신 트랜드에 민감하여 늘 새로운 기술과 Github Trend를 눈여겨 보고 배웁니다.</li>
            <li>구현할때에는 늘 최신의 기술이 좋다고 생각하지 않습니다. 안정성과 효율 사이에서 고민하여 결정합니다.</li>
            <li>주도적으로 일할 수 있는 환경을 선호합니다.</li>
          </SubList>
          <SubList title="Communication">
            <li>사람간에 의견이 전부 다름을 당연하게 보고 각 의견의 장단점을 파악하려합니다.</li>
            <li>개발자의 실력은 서로간에 커뮤니케이션을 통해 많은 부분이 개선·보안된다고 보며 팀원들과 기술적인 커뮤니케이션을 나누는 것을 좋아합니다.</li>
            <li>직급에 상관없이 솔직하게 말하는 것을 좋아합니다.</li>
          </SubList>
          <SubList title="HTML / CSS">
            <li>CrossBrowsing 및 반응형 & 적응형 웹을 만들 수 있습니다.</li>
            <li>웹 접근성을 고려한 마크업을 작성합니다.</li>
            <li>Sass 등 CSS Preprocessor를 사용할 수 있습니다.</li>
            <li>BEM 등의 CSS 방법론을 적용할 수 있습니다.</li>
            <li>CSS3의 기능들을 사용할 수 있으며 CSS3 애니메이션을 다룰 수 있습니다.</li>
          </SubList>
          <SubList title="Javascript">
            <li>ES6 이후의 자바스크립트의 문법에 익숙합니다.</li>
            <li>jQuery 사용에 능숙하고 Pure Javascript로도 DOM API를 다룰 수 있습니다.</li>
            <li>Curry, Partial, HOF 등의 Functional 기법을 작성 할 수 있으며 함수형 프로그래밍의 원칙을 이해하고 있습니다.</li>
            <li>GSAP 애니메이션 라이브러리에 익숙합니다.</li>
            <li>Youtube, Vimeo 등 유명 API를 다룰 수 있습니다.</li>
            <li>Typescript 문법을 이해하고 사용할 수 있습니다.</li>
            <li>모바일 페이지 스크립트 기법에 익숙합니다.</li>
          </SubList>
          <SubList title="React">
            <li>Typescript와 React를 같이 사용할 수 있습니다.</li>
            <li>Redux의 개념과 사용방법을 알고 있습니다.</li>
            <li>컴포넌트 라이프사이클에 대해 이해하고 있습니다.</li>
            <li>Mobx를 사용할 수 있으며 Mobx Design Pattern에 푹 빠져 공부중입니다 *-*</li>
          </SubList>
        </Box>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Other Experiences" name="Experiences">
        <Box paddingTop={4} paddingBottom={4}>

          <DateContent date="2019. 8 ~" title="프리윌린 재직 중">수학 관련 서비스 앱 Mathflat을 웹으로 이식하는 프로젝트 Webthflat 프론트엔드 개발자로써 일하고 있습니다.</DateContent>
          <DateContent date="2019. 7 ~" title="패스트캠퍼스 React 과정 수강중"/>
          <DateContent date="2019. 5" title="정보처리기사 취득"/>
          <DateContent date="2016. 11 ~ 2018. 11" title="이트라이브">2년간 다니며 20개 이상의 프로젝트 진행 - 자세한 작업 내용은 위의 프로젝트를
            확인부탁드립니다.</DateContent>
          <DateContent date="2016. 5 ~ 2016. 10" title="그린컴퓨터아카데미">웹퍼블리셔&프론트앤드 전문가 과정 수료</DateContent>
          <DateContent date="2011. 3 ~ 2016. 2" title="동양미래대학교">소프트웨어정보과 졸업</DateContent>
          <DateContent date="2015. 11" title="2015 삼성전자 SCSC-C 창의공학 경진대회 최우수">원격 조종하며 웹으로 영상 결과물 공유하는 라즈베리 CCTV 제작 - 웹 파트
            담당.</DateContent>
          <DateContent date="2015. 11" title="동양미래대학교 2015 스마트 SW 개발 경진대회 최우수">스토리맵이라는 작품으로써 스마트폰으로 GPS로 실시간 사용자의 위치를 찍으며
            사진을 찍으면 현재 위치에 사진이 등록되게 한 위치기반 SNS이며 구글맵 임베디드로 타 사이트에 배포 가능하게 제작.
            <br/>
            팀장 역할 담당<br/>
            Python 웹서버 Framework인 Django 사용, MariaDB Django ORM 연동 후 운영</DateContent>
        </Box>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Contact" name="Contact">
        <Grid container={true} spacing={6} className={`${classes.contact} ${classes.middleBody}`}>
          <Grid item={true} xs={6} sm={3}>
            <a href="mailto: rjcnd105@gmail.com" title="send email">
              <Box className="icon-wrap">
                <Email className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>E-Mail</Typography>
            </a>
          </Grid>
          {/*<Grid item xs={6} sm={3}>*/}
          {/*  <a href='/' title='Phone'>*/}
          {/*    <Box className='icon-wrap'>*/}
          {/*      <Phone className={classes.icon}/>*/}
          {/*    </Box>*/}
          {/*    <Typography className={classes.middleBody}>Phone</Typography>*/}
          {/*  </a>*/}
          {/*</Grid>*/}
          <Grid item={true} xs={6} sm={3}>
            <a href="https://github.com/rjcnd105?tab=repositories" target="_blank" title="Github">
              <Box className="icon-wrap">
                <Github className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>Github</Typography>
            </a>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <a href="https://www.instagram.com/kuku_nyan/?hl=ko" target="_blank" title="Instagram">
              <Box className="icon-wrap">
                <Instagram className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>Instagram</Typography>
            </a>
          </Grid>
        </Grid>
      </SubContentWrapper>
      <Box paddingBottom={4}/>
    </Grid>
  );
};

export default SubContents;
