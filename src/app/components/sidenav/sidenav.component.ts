import { Component, Input } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menuList: any[] = [
    { nombre: 'Sobre mí', url: 'About' },
    { nombre: 'Habilidades', url: 'Skills' },
    { nombre: 'Proyectos', url: 'Projects' },
    { nombre: 'Contacto', url: 'Contact' },
  ];
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
}
