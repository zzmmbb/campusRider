import { Component, OnInit } from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class addressPage implements OnInit {

  constructor(public uniteParameter: UniteParameter) {
  }

  ngOnInit(): void {
  }
}
