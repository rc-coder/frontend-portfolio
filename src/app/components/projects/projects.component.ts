import { Component, inject } from '@angular/core';
import { Project } from 'src/app/models';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any[] = [];
  databaseService = inject(DatabaseService);

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.databaseService.getProyectos().subscribe((data) => {
      this.projects = data;
    });
  }
}
