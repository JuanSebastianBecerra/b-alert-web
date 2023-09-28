import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  clockImagePath: string;

  constructor() {
    this.clockImagePath = '/assets/images/despertador_transparente.png'
  }

}
