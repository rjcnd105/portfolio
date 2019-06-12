import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import '../style/App.css';
import { ToyProjectGallery, WorkProjectGallery } from './ProjectGallery';
import ProjectViewFrame from './ProjectViewFrame';

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="introduce">
        <h1>
          반갑습니다.
          <br/>
          저는 김회준입니다.
        </h1>
        {/*<p>서울에서 2년간 스크립터로써 일했으며 사용자의 편의성과 </p>*/}
      </section>
      <Container maxWidth="sm">
        <WorkProjectGallery/>
        <ToyProjectGallery/>
        <ProjectViewFrame/>
      </Container>
    </div>
  );
};

export default App;
