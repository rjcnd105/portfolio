import React from 'react';
import { fetchProject } from '../actions';
import { ProjectData } from '../types';
import { MouseHandler } from '../types/common';

type State = {
  isHover: boolean
}

class GalleryItem extends React.Component<ProjectData, State> {

  public readonly state = { isHover: false };
  public onProjectClick = (src: string): MouseHandler => e => {
    e.preventDefault();
    fetchProject(src);
  };
  public onProjectMouseEnter: MouseHandler = () => {
    this.setState({ isHover: true });
  };
  public onProjectMouseLeave: MouseHandler = () => {
    this.setState({ isHover: false });
  };
  public onProjectMouseMove: MouseHandler = e => {
    console.log(e);
    e.preventDefault();
  };

  public render() {
    const { name, url, src } = this.props;
    return <li key={name} className={`gallery-item ${this.state.isHover ? 'item--hover' : ''}`}>
      <button
        className="gallery-full-button"
        onClick={url ? this.onProjectClick(url) : () => false}
        onMouseEnter={this.onProjectMouseEnter}
        onMouseMove={this.onProjectMouseMove}
        onMouseLeave={this.onProjectMouseLeave}
      >
        <div className="project-dimm"/>
        <img src={src} alt={name}/>
      </button>
    </li>
  };
};

export default GalleryItem;
