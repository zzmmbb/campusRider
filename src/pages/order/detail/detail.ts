import { Component ,ElementRef, Renderer2} from '@angular/core';
import {UniteParameter} from '../../../global/uniteParameter';
import {IonicPage} from "ionic-angular";
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage  {

  height: any;
  constructor(public uniteParameter: UniteParameter,private el: ElementRef,
    private renderer2: Renderer2) {
  }

  ionViewDidLoad() {
    //ts 控制波浪线长度
    let maxheight = this.el.nativeElement.querySelector('#card').clientHeight;
    let buttomheight = this.el.nativeElement.querySelector('#buttom').clientHeight;
 console.log(maxheight + '\\' + buttomheight)
    this.renderer2.setStyle(this.el.nativeElement.querySelector('#line'),
    'height', (maxheight  - 22 - buttomheight) + 'px');
  }
}
