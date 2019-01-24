import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavitagion]'
})
export class NavitagionDirective {
  private _element;

  constructor(element: ElementRef) {
    this._element = element;
   }

  @HostListener('click', ['$event.target']) onClick() {
    this.manageMenu(this._element.nativeElement);
  }

  manageMenu(element): void {
    let ul = element.nextSibling.nextSibling;
    
    if (element.style.color == 'black') {
      element.style.color = 'white';
      ul.style['margin-top']= '-200px';
      ul.style.opacity = "0";
    }
    else {
      element.style.color = 'black';
      ul.style['margin-top'] = '0';
      ul.style.opacity = "1";
    }

  }
}
