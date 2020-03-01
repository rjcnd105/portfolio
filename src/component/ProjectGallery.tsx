import { Grid, Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { createRef, RefObject } from 'react';
import { connect } from 'react-redux';
import { ProjectData, RootState } from '../types';
import { BaseProps } from '../types/common';
import GalleryItem from './GalleryItem';

const useStyles = makeStyles((theme: Theme) => ({
  gallery: {
    paddingTop: '24px',
    paddingBottom: '24px',
    margin: '0 -12px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0'
    }
  },
  item: {
    padding: '12px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    }
  }
}));

type Props = BaseProps & {
  projectList: ProjectData[],
  type: 'image' | 'frame',
}

const ProjectGallery: React.FC<Props> = (props) => {
  const { projectList, type } = props;
  const element: RefObject<HTMLElement> = createRef();
  const classes = useStyles();
  const theme: Theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  // useEffect(() => {}, []);

  const items = projectList.map((data: ProjectData, i) => <Grid item={true} xs={12} sm={6} md={4} lg={3} key={data.name} className={classes.item}><GalleryItem type={props.type}
    className={'project_item'} project={data}/></Grid>);
  if (matches) {

  }

  return (
    <Grid container={true} ref={element} className={classes.gallery} style={{ overflow: 'none !important' }}>
      {/*<div className="gutter-sizer"/>*/}
      {items}
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
