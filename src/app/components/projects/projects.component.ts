import { Component, inject } from '@angular/core';
import { Project } from 'src/app/models';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any;
  projectsService = inject(DatabaseService);

  ngOnInit() {
    this.projects = this.projectsService.getProyectos();
  }
}
