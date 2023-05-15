import { Component, inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  private databaseService = inject(DatabaseService);
  datosPersona: any[] = [];
  nombre: String = '';
  apellido: String = '';
  titulo: String = '';
  // email: String = '';
  // telefono: String = ';';

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.databaseService.getPersona().subscribe((data) => {
      this.datosPersona = data;

      this.nombre = this.datosPersona[0].nombre;
      this.apellido = this.datosPersona[0].apellido;
      this.titulo = this.datosPersona[0].titulo;
      // this.email = this.datosPersona[0].email;
      // this.telefono = this.datosPersona[0].telefono;
    });
  }
}
