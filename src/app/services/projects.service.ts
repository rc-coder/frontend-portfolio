import { Injectable } from '@angular/core';
import { Project } from '../project';
import { projectList } from '../mock-projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects(): Project[] {
    return projectList;
  }
}
