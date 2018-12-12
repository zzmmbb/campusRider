import { ComponentsModule } from './../../../components/components.module';
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {personalInfoPage} from "./personalInfo";
@NgModule({
  declarations: [
    personalInfoPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(personalInfoPage),
  ]
})
export class personalInfoPageModule { }
