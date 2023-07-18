import { Component, inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  private databaseService = inject(DatabaseService);
  datosPersona: Persona[] = [];
  personaForm: FormGroup = new FormGroup({});
  faPen = faPen;
  ngOnInit(): void {
    this.cargarDatos();
    this.personaForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      titulo: new FormControl(''),
    });
  }

  cargarDatos() {
    this.databaseService.getPersona().subscribe((data) => {
      if (data) {
        this.datosPersona = data;
      }
    });
  }

  editarPersona() {
    this.databaseService
      .editarTecnologia(this.personaForm.value)
      .subscribe((resp) => {
        this.cargarDatos();
        if (resp) {
          this.personaForm.reset();
        }
      });
  }

  selectItem(item: any) {
    this.personaForm.controls['id'].setValue(item.id);
    this.personaForm.controls['nombre'].setValue(item.nombre);
    this.personaForm.controls['apellido'].setValue(item.apellido);
    this.personaForm.controls['titulo'].setValue(item.titulo);
  }
}
