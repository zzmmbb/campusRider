import { Component, OnInit } from '@angular/core';
import {UniteParameter} from '../../global/uniteParameter';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-receiveOrder',
  templateUrl: 'receiveOrder.html'
})
export class receiveOrderPage implements OnInit {

  public studentInfo = {};
  constructor(public uniteParameter: UniteParameter) {
  }

  ngOnInit(): void {
  }

}
