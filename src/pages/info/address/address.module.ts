import { addressPage } from './address';
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations: [
    addressPage
  ],
  imports: [
    IonicPageModule.forChild(addressPage),
  ]
})
export class addressPageModule { }
