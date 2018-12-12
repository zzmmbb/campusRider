import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SelectRedioComponent } from './select-redio/select-redio';
import { Select2RedioComponent } from './select2-redio/select2-redio';
@NgModule({
	declarations: [
		SelectRedioComponent,
		Select2RedioComponent],
	imports: [
		IonicModule
	],
	exports: [
		SelectRedioComponent,
		Select2RedioComponent]
})
export class ComponentsModule {}
