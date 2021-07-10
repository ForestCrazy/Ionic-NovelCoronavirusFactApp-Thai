import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  /* gotoroot() {
    this.nav.navigateRoot('/home');
  } */

  gotoforward(pageNum) {
    this.nav.navigateForward('/covid' + pageNum);
  }

  gotoback() {
    this.nav.navigateBack('/menu');
  }
}
