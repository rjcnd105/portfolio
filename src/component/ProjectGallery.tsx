import React, { useEffect, createRef, RefObject } from 'react';
import { connect } from 'react-redux';
import { ProjectData, RootState } from '../types';
import { BaseProps } from '../types/common';
import GalleryItem from './GalleryItem';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  item: {
    // transition: '.6s padding'
  }
});

type Props = BaseProps & {
  projectList: ProjectData[],
  type: string,
}

const ProjectGallery: React.FC<Props> = (props) => {

  const { projectList, type } = props;
  const element: RefObject<HTMLElement> = createRef();
  const classes = useStyles();
  // useEffect(() => {}, []);

  return (
    <Grid container ref={element} spacing={3} style={{ overflow: 'none !important' }}>
      {/*<div className="gutter-sizer"/>*/}
      {projectList.map((data: ProjectData) => <Grid item xs={6} sm={6} md={4} key={data.name} className={classes.item}><GalleryItem
        className={`project_item`}
        {...data}/></Grid>)}
    </Grid>
  );
};

// const map;
const mapStateToProps = ({ projectList }: RootState): Props => ({
  projectList,
  type: 'image',
});

const mapStateToPropsToy = ({ toyProjectList }: RootState): Props => ({
  projectList: toyProjectList,
  type: 'frame',
});

export const WorkProjectGallery = connect(
  mapStateToProps,
)(ProjectGallery);

export const ToyProjectGallery = connect(
  mapStateToPropsToy,
)(ProjectGallery);
