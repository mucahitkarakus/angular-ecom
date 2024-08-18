import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValid]',
  standalone: true,
})
export class ValidDirective {
  @Input() appValid: boolean | null = false; 

  constructor(private _el: ElementRef<any>) {}

  @HostListener('ngModelChange') onModelChange() {
    if (this.appValid) {
      this._el.nativeElement.classList.add('is-valid');
      this._el.nativeElement.classList.remove('is-invalid');
    } else {
      this._el.nativeElement.classList.add('is-invalid');
      this._el.nativeElement.classList.remove('is-valid');
    }
  }
}
