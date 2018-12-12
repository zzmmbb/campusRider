import { Component, Input, Output, EventEmitter,ElementRef, Renderer2} from '@angular/core';

/**
 * Generated class for the SelectRedioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-redio',
  templateUrl: 'select-redio.html'
})
export class SelectRedioComponent {
    @Input() data: any;
    @Output('recValue') recValue = new EventEmitter<any>();

    public isTrue = true;
    constructor(private el: ElementRef,
      private renderer2: Renderer2,) {
    }

    clickData(id, text){
      let obj = {'id':id,'text':text};
      this.recValue.emit(obj);
      this.hideBack();
    }

    displayBack() {
      this.isTrue = false;
      this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
      'bottom', '0');
      this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
      'background', 'rgba(1,1,1,0.3)');
    }

    hideBack() {
      setTimeout(() => {
        this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
        'bottom', '-400px');
        this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
        'background', 'rgba(1,1,1,0)');
          }, 200);
      setTimeout(() => {
        this.isTrue = true;
      }, 500);
    }

    JshideBack() {
      this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-content'),
      'bottom', '-400px');
      this.renderer2.setStyle(this.el.nativeElement.querySelector('.jz-select-background'),
      'background', 'rgba(1,1,1,0)');
      setTimeout(() => {
        this.isTrue = true;
      }, 300);
    }
}
