import { App } from 'ionic-angular';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personalInfo',
  templateUrl: 'personalInfo.html'
})
export class personalInfoPage implements OnInit {

  @ViewChild('recValuexb') recValuexb;

  xb: any;

  constructor(public uniteParameter: UniteParameter,private app:App) {
  }

  ngOnInit(): void {
  }

  presentXbSheet() {
    this.xb = [{'id':'男','text':'男'},{'id':'女','text':'女'}];
    this.recValuexb.displayBack();
  }

  recDataxb(event) {
    console.log(event)
  }
}
