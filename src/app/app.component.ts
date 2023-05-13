import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-portfolio';

  public open = true;
  public backdrop = false;
  public getScreenWidth: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 600) {
      this.open = false;
      this.backdrop = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 600) {
      this.open = false;
      this.backdrop = true;
    } else if (this.getScreenWidth >= 600) {
      this.open = true;
      this.backdrop = false;
    }
  }
}
