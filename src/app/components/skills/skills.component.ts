import { Component, inject } from '@angular/core';
import { Tecnologia } from 'src/app/models';
import { DatabaseService } from 'src/app/services/database.service';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faAngular,
  faSass,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faPaintbrush,
  faGlobe,
  faScrewdriverWrench,
  faPowerOff,
  faCodeBranch,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  tecnologias: Tecnologia[] = [];
  tecForm: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  databaseService = inject(DatabaseService);

  ngOnInit(): void {
    this.cargarDatos();
    this.tecForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
    });
  }

  cargarDatos() {
    this.databaseService.getTecnologias().subscribe((data) => {
      if (data) {
        this.tecnologias = data;
      }
    });
  }

  agregarTec() {
    this.databaseService
      .agregarTecnologia(this.tecForm.value)
      .subscribe((resp) => {
        this.cargarDatos();
        if (resp) {
          this.tecForm.reset();
        }
      });
  }

  editarTec() {
    this.databaseService
      .editarTecnologia(this.tecForm.value)
      .subscribe((resp) => {
        this.cargarDatos();
        if (resp) {
          this.tecForm.reset();
        }
      });
  }

  borrarTec(id: any) {
    this.databaseService.borrarTecnologia(id).subscribe((resp) => {
      this.cargarDatos();
    });
  }

  newTec() {
    this.isUpdate = false;
    this.tecForm.reset();
  }

  selectTec(item: any) {
    this.isUpdate = true;
    this.tecForm.controls['id'].setValue(item.id);
    this.tecForm.controls['nombre'].setValue(item.nombre);
  }

  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faReact = faReact;
  faAngular = faAngular;
  faSass = faSass;
  faGit = faGit;
  faDatabase = faDatabase;
  faPaintbrush = faPaintbrush;
  faGlobe = faGlobe;
  faScrewdriverWrench = faScrewdriverWrench;
  faPowerOff = faPowerOff;
  faCodeBranch = faCodeBranch;
  faPen = faPen;
  faTrashCan = faTrashCan;
}
