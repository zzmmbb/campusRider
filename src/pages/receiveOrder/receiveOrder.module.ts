import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {receiveOrderPage} from "./receiveOrder";

@NgModule({
  declarations: [
    receiveOrderPage
  ],
  imports: [
    IonicPageModule.forChild(receiveOrderPage)
  ]
})
export class receiveOrderPageModule { }
