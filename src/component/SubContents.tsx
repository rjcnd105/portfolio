import { Box, Container, Grid,  List, Theme, Typography } from '@material-ui/core';
import React from 'react';

import { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../constants/colors';
import commonStyle from '../style/commonStyle';
import { NavItems } from '../types';
import Blog from './icons/Blog'
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
    '& a': {
      '& p': {
        padding: '4px 0',
      },
      textDecoration: 'none',
      display: 'block',
      width: '48px',
      height: '100%',
      textAlign: 'center'
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
            <li>Agile한 환경에서 팀과 제품이 같이 점진적 개발되는 경험이 너무 좋았습니다.</li>
            <li>업무에 필요하다면 익숙한 분야가 아니더라도 찾아봄으로써 더 최적의 결과를 낼 수 있도록 노력합니다.</li>
            <li>계속해서 명료하고 재사용 가능한 더 좋은 방법을 찾는 것은 개발자로써의 숙명이라 생각합니다.</li>
            <li>주도적으로 일할 수 있는 환경을 선호합니다.</li>
          </SubList>
          <SubList title="Communication">
            <li>사람간에 의견이 전부 다름을 당연하게 보고 각 의견의 장단점을 파악하려합니다.</li>
            <li>개발 철학에 대해 이야기하는 것을 매우 좋아합니다.</li>
            <li>좋은 디자인이 뭘까라는 것을 늘 고민하며 디자이너들과 이야기하는 것을 즐깁니다.</li>
            <li>직급, 나이에 상관없이 솔직하게 말하는 것을 좋아합니다.</li>
          </SubList>
          <SubList title="HTML / CSS">
            <li>CrossBrowsing 및 반응형 & 적응형 웹을 만들 수 있습니다.</li>
            <li>Sass, Less 등 CSS Preprocessor를 사용할 수 있습니다.</li>
            <li>CSS3의 기능들을 사용할 수 있으며 CSS3 애니메이션을 다룰 수 있습니다.</li>
            <li>BEM 등의 CSS 방법론을 적용할 수 있습니다.</li>
            <li>인스펙터로 타사의 HTML, CSS 구조와 Design System 을 찾아 보는 취미가 있습니다.</li>
          </SubList>
          <SubList title="Javascript">
            <li>Compose, Curry, HOF 등의 함수형 기법을 사용하며 함수형 프로그래밍을 사랑합니다 ♥</li>
            <li>타입추론 기법을 통한 Typescript 사용을 지향합니다.</li>
            <li>상태가 지속적으로 변하는 단에서는 객체지향의 DDD한 방법론을 지향합니다.</li>
            <li>전체적으로 Mixin 적인 개발 방법론을 지향합니다.</li>
          </SubList>
          <SubList title="React">
            <li>Typescript와 React를 같이 사용하는데 익숙합니다.</li>
            <li>React Hook에 익숙하며 커스텀 훅 만드는 것을 좋아합니다.</li>
            <li>Redux의 개념과 사용방법을 알고 있습니다.</li>
            <li>Mobx에 익숙하며 mobx-react-lite, mobx-utils과 같이 사용하는 것을 즐깁니다.</li>
            <li>리엑트의 다양한 패턴을 연구하며 Render Props와 Custom Hook과의 조합을 좋아합니다.</li>
          </SubList>
        </Box>
      </SubContentWrapper>

      <SubContentWrapper subTitle="Other Experiences" name="Experiences">
        <Box paddingTop={4} paddingBottom={4}>

          <DateContent date="2019. 8 ~" title="프리윌린 재직 중">수학 관련 서비스 앱 Mathflat을 웹으로 이식하는 프로젝트 Webthflat 프론트엔드 개발자로써 일하고 있습니다.<br/>
          React, Typescript, Mobx, styled-component 등을 사용사용하여 학생 출석체크 달력, 학생 반 정보 관리, 문자 템플릿과 문자 송수신 기능, 문제지 학생별 멀티 다운로드, PDF 출력 용 보고서 등을 작업하였습니다.</DateContent>
          <DateContent date="2019. 7 ~ 2019. 11" title="패스트캠퍼스 React 과정 수강 완료"/>
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
        <Grid container={true} spacing={3} className={`${classes.contact} ${classes.middleBody}`}>
          <Grid item={true} xs={3} md={2}>
            <a href="https://github.com/rjcnd105?tab=repositories" target="_blank" title="Github">
              <Box className="icon-wrap">
                <Github className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>Github</Typography>
            </a>
          </Grid>
          <Grid item={true} xs={3} md={2}>
            <a href="https://gggururu.tistory.com/8" target="_blank" title="Blog">
              <Box className="icon-wrap">
                <Blog className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>Blog</Typography>
            </a>
          </Grid>
          {/*<Grid item sm={3} md={2}>*/}
          {/*  <a href='/' title='Phone'>*/}
          {/*    <Box className='icon-wrap'>*/}
          {/*      <Phone className={classes.icon}/>*/}
          {/*    </Box>*/}
          {/*    <Typography className={classes.middleBody}>Phone</Typography>*/}
          {/*  </a>*/}
          {/*</Grid>*/}

          <Grid item={true} xs={3} md={2}>
            <a href="https://www.instagram.com/kuku_nyan/?hl=ko" target="_blank" title="Instagram">
              <Box className="icon-wrap">
                <Instagram className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>Insta</Typography>
            </a>
          </Grid>
          <Grid item={true} xs={3} md={2}>
            <a href="mailto: rjcnd105@gmail.com" title="send email">
              <Box className="icon-wrap">
                <Email className={classes.icon}/>
              </Box>
              <Typography className={classes.middleBody}>E-Mail</Typography>
            </a>
          </Grid>
        </Grid>

      </SubContentWrapper>
      <Box paddingBottom={4}/>
    </Grid>
  );
};

export default SubContents;
