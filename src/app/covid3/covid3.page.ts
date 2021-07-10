import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-covid3',
  templateUrl: './covid3.page.html',
  styleUrls: ['./covid3.page.scss'],
})
export class Covid3Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
