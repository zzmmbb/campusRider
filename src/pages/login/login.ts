import { Component, OnInit } from '@angular/core';
import {UniteParameter} from '../../global/uniteParameter';
import { IonicPage, App, NavController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  public account: any;
  public password: any;

  constructor(private uniteParameter: UniteParameter,public navCtrl: NavController) {
  }

  ngOnInit(): void {
  }

  closeLogin() {

  }

  ForgetPassword() {
    this.navCtrl.push('ForgetPasswordPage');
  }

  RegistPage() {
    this.navCtrl.push('RegistPage');
  }
}
