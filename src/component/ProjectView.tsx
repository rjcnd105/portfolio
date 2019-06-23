import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeProject } from '../actions';
import { RootState, ShowingProject } from '../types';
import { BaseProps, MouseHandler } from '../types/common';

type Props = BaseProps & {
  showingProject?: ShowingProject
}

type State = {}

class ProjectView extends Component<Props, State> {
  public onClose: MouseHandler = e => {
    e.preventDefault();
  };
  public renderContent() {
    if (!this.props.showingProject) {
      return;
    }
    const type = this.props.showingProject.type;
    const {name, src, url} = this.props.showingProject.selectProject;
    switch (type) {
      case 'image':
        return <div className="view-frame">
          <iframe title={name} src={url}/>
        </div>;
      case 'frame':
        return <div className="view-image">
          <img alt={name} src={src}/>
        </div>;
      default: return '';
    }
  }
  public render() {
    return (
      <div className="fixed-area">
        <div className="dimm"/>
        <button className="close-btn" onClick={this.onClose}/>
        {this.renderContent()}
        <div className="view-info">
          <div className="view-title"></div>
          <div className="view-date"></div>
          <div className="view-url"></div>
          <div className="view-tech-stack"></div>
          <div className="view-description"></div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ showingProject }: RootState) => showingProject;

export default connect(
  mapStateToProps,
  { closeProject },
)(ProjectView);
