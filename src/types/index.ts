export type ProjectData = {
  name: string,
  thumbnail: string,
  src?: string,
  url?: string,
  mUrl?: string,
  areaDate?: string[],
  techStack: string,
  description: string,
}
export type ShowingProject = {
  project: ProjectData,
  type: 'image' | 'frame',
}

export interface RootState {
  projectList: ProjectData[],
  toyProjectList: ProjectData[],
  showingProject: ShowingProject,
}

export type ContentNames = 'Introduce' | 'Project' | 'Skills' | 'Experiences' | 'Contact';
export type NavItems = ContentNames[];
