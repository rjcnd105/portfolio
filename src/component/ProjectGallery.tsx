import * as React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { fetchProject } from '../actions';
import { ProjectData, RootState } from '../types';
import { BaseProps, MouseHandler } from '../types/common';
import GalleryItem from './GalleryItem';

const masonryOptions = {
  transitionDuration: 400,
};

type Props = BaseProps & {
  projectList: ProjectData[],
  onClick?: MouseHandler
}

type State = {}

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class ProjectGallery extends React.Component<Props, State> {
  public render() {
    const childElements = this.props.projectList.map((data: ProjectData) => <GalleryItem key={data.name} {...data}/>);

    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        // imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

// const map;
const mapStateToProps = ({ projectList }: RootState): { projectList: ProjectData[] } => ({
  projectList,
});

const mapStateToProps2 = ({ toyProjectList }: RootState): { toyProjectList: ProjectData[] } => ({
  toyProjectList,
});

export const WorkProjectGallery =  connect(
  mapStateToProps,
  { fetchProject },
)(ProjectGallery);

export const ToyProjectGallery =  connect(
  mapStateToProps,
  { fetchProject },
)(ProjectGallery);
