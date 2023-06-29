import { Component, Input, inject } from '@angular/core';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menuList: any[] = [
    { nombre: 'Sobre mí', url: '#about' },
    { nombre: 'Habilidades', url: '#skills' },
    { nombre: 'Proyectos', url: '#projects' },
    { nombre: 'Contacto', url: '#contact' },
  ];
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
}
