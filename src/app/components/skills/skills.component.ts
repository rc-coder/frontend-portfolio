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
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  tecnologias: any[] = [];
  databaseService = inject(DatabaseService);

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.databaseService.getTecnologias().subscribe((data) => {
      this.tecnologias = data;
    });
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
}
