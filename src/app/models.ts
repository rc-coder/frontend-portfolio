export interface Persona {
  id: number;
  nombre: String;
  apellido: String;
  titulo: String;
  telefono: String;
  email: String;
  sobreMi: String;
  habilidades: String;
}

export interface Tecnologia {
  id: number;
  nombre: string;
  icono: string;
}

export interface Project {
  id?: number;
  name: string;
  img: string;
  link: string;
}
