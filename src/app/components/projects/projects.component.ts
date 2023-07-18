import { Component, inject } from '@angular/core';
import { Project } from 'src/app/models';
import { DatabaseService } from 'src/app/services/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  faPen = faPen;
  faTrashCan = faTrashCan;

  projects: Project[] = [];
  projectForm: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  databaseService = inject(DatabaseService);

  ngOnInit(): void {
    this.cargarDatos();
    this.projectForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      link: new FormControl(''),
    });
  }

  cargarDatos() {
    this.databaseService.getProyectos().subscribe((data) => {
      if (data) {
        this.projects = data;
      }
    });
  }

  agregarProyecto() {
    this.databaseService
      .agregarProyecto(this.projectForm.value)
      .subscribe((resp) => {
        this.cargarDatos();
        if (resp) {
          this.projectForm.reset();
        }
      });
  }

  editarProyecto() {
    this.databaseService
      .editarProyecto(this.projectForm.value)
      .subscribe((resp) => {
        this.cargarDatos();
        if (resp) {
          this.projectForm.reset();
        }
      });
  }

  borrarProyecto(id: any) {
    this.databaseService.borrarProyecto(id).subscribe((resp) => {
      this.cargarDatos();
    });
  }

  newProject() {
    this.isUpdate = false;
    this.projectForm.reset();
  }

  selectProject(item: any) {
    this.isUpdate = true;
    this.projectForm.controls['id'].setValue(item.id);
    this.projectForm.controls['nombre'].setValue(item.nombre);
    this.projectForm.controls['link'].setValue(item.link);
  }
}
