import { Component, Input, Output, EventEmitter,ElementRef, Renderer2} from '@angular/core';

/**
 * Generated class for the Select2RedioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select2-redio',
  templateUrl: 'select2-redio.html'
})
export class Select2RedioComponent {

  @Input() data: any;
  @Output('recValue') recValue = new EventEmitter<any>();

  public value = false;
  public isTrue = true;
  private hide = true;
  private clickDta: any;
  constructor(private el: ElementRef,
    private renderer2: Renderer2) {
  }

  clickData() {
    this.recValue.emit(this.clickDta);
  }

  displayBack() {
    this.isTrue = false;
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
    'bottom', '0');
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
    'background', 'rgba(1,1,1,0.3)');
  }

  hideBack() {
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
    'bottom', '-400px');
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
    'background', 'rgba(1,1,1,0)');
    this.clickDta = {};
    this.value = false;
    setTimeout(() => {
      this.isTrue = true;
    }, 300);
  }

  JshideBack() {
    if(!this.hide) {
      this.hide = true;
      return;
    }
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
    'bottom', '-400px');
    this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
    'background', 'rgba(1,1,1,0)');
    setTimeout(() => {
      this.isTrue = true;
    }, 300);
  }

  selectRedio(id,text) {
    this.value = id;
    this.clickDta = {'id':id,'text':text};
  }

  nohide() {
    this.hide = false;
  }
}
