import { App } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import {UniteParameter} from '../../global/uniteParameter';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage implements OnInit {

  constructor(public uniteParameter: UniteParameter,private app:App) {
  }

  ngOnInit(): void {
  }

  goToPage(page: any): void {
    this.app.getRootNav().push(page);
  }
}
