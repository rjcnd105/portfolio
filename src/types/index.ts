import * as React from 'react';
import { BaseProps } from './common';

export type ProjectData = {
  name: string,
  src: string,
  url?: string,
  areaDate?: string[],
  techStack: string,
  description: string,
}

export type EtcData = {
  title: string,
  description: string,
  date: string,
}

export interface RootState {
  projectList: ProjectData[],
  toyProjectList: ProjectData[],
  showingProject: ProjectData,
}
