import { Component } from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import {App, IonicPage} from "ionic-angular";
@IonicPage()
@Component({
  selector: 'page-forgetPassword',
  templateUrl: 'forgetPassword.html'
})
export class ForgetPasswordPage  {

  constructor(public uniteParameter: UniteParameter,private app: App) {
  } 
}
