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

  projectsDob: any[] = [
    {
      link: '',
      nombre: 'Technical documentation',
      img: '../../../assets/photos/reactPic.jpeg',
    },
    {
      link: '',
      nombre: 'Landing Page Html-Css',
      img: '../../../assets/photos/reactPic.jpeg',
    },
    {
      link: '',
      nombre: 'Survey Form Html-Css',
      img: '../../../assets/photos/reactPic.jpeg',
    },
    {
      link: '',
      nombre: 'proyecto',
      img: '../../../assets/photos/reactPic.jpeg',
    },
    {
      link: '',
      nombre: 'proyecto',
      img: '../../../assets/photos/reactPic.jpeg',
    },
  ];
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
