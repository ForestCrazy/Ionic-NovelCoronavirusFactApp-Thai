import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-covid5',
  templateUrl: './covid5.page.html',
  styleUrls: ['./covid5.page.scss'],
})
export class Covid5Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
