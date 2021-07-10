import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-covid4',
  templateUrl: './covid4.page.html',
  styleUrls: ['./covid4.page.scss'],
})
export class Covid4Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
