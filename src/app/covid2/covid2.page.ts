import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.page.html',
  styleUrls: ['./covid2.page.scss'],
})
export class Covid2Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
