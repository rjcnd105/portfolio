import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeProject } from '../actions';
import { ProjectData, RootState } from '../types';
import { BaseProps, MouseHandler } from '../types/common';

type Props = BaseProps & {
  showingProject?: ProjectData
}

type State = {}

class ProjectViewFrame extends Component<Props, State> {
  public onClose: MouseHandler = e => {
    e.preventDefault();
  };
  public renderFrame() {
    return !!this.props.showingProject ?
      <iframe title={this.props.showingProject.name} src={this.props.showingProject.src}/> : ''
  }
  public render() {
    return (
      <div className="fixed-area">
        <div className="dimm"/>
        <button className="close-btn" onClick={this.onClose}/>
        <div className="view-frame">
          {this.renderFrame()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ showingProject }: RootState) => showingProject;

export default connect(
  mapStateToProps,
  { closeProject },
)(ProjectViewFrame);
