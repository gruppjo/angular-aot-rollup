import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  showHeading = true;
  heroes = ['Pikachu', 'Bombasto', 'Magma', 'Tornado'];
  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
