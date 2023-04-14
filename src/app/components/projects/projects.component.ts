import { Component, inject } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [];
  projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
