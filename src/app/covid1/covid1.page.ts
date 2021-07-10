import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.page.html',
  styleUrls: ['./covid1.page.scss'],
})
export class Covid1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
