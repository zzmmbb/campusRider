import { ComponentsModule } from './../../../components/components.module';
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ReleaseTaskPage} from "./releaseTask"; 


@NgModule({
  declarations: [ 
    ReleaseTaskPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ReleaseTaskPage),
  ]
})
export class ReleaseTaskPageModule { }
