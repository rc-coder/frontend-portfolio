import { Component, inject } from '@angular/core';
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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  data: any = {};
  dbService = inject(DatabaseService);

  technologies: String[] = [
    'Html',
    'Css',
    'Javascript',
    'Typescript',
    'ReactJs',
    'Angular',
    'Git',
    'Sql',
    'MySql',
    'Sass',
    'Styled Components',
  ];

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.dbService.getPersona().subscribe((data) => {
      this.data = data;
      console.log(data);
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
