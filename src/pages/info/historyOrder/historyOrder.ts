import { Component, OnInit } from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-historyOrder',
  templateUrl: 'historyOrder.html'
})
export class historyOrderPage implements OnInit {

  constructor(public uniteParameter: UniteParameter) {
  }

  ngOnInit(): void {
  }
}
