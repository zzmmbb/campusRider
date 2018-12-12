import { Component } from '@angular/core';
import {UniteParameter} from '../../global/uniteParameter';
import {App, IonicPage} from "ionic-angular";
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage  {

  constructor(public uniteParameter: UniteParameter,private app: App) {
  }

  goToReleaseTaskPage() {
    this.app.getRootNav().push('ReleaseTaskPage');
  }

  goToDetailPage() {
    this.app.getRootNav().push('DetailPage');
  }
}
