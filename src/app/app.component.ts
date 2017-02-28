import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  showHeading = true;
  heroes = ['Pikachu', 'Bombasto', 'Magma', 'Tornado'];
  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
