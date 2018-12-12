import { Component } from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import {App, IonicPage} from "ionic-angular";
@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html'
})
export class RegistPage  {

  constructor(public uniteParameter: UniteParameter,private app: App) {
  } 
}
