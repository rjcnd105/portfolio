import * as React from 'react';
import { BaseProps } from './common';

export type ProjectData = {
  name: string,
  thumbnail: string,
  src?: string,
  url?: string,
  areaDate?: string[],
  techStack: string,
  description: string,
}
export type ShowingProject = {
  selectProject: ProjectData,
  type: 'image' | 'frame',
}

export type EtcData = {
  title: string,
  description: string,
  date: string,
}

export interface RootState {
  projectList: ProjectData[],
  toyProjectList: ProjectData[],
  showingProject: ShowingProject,
}
