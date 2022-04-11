import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appopen]'
})
export class OpenDirective{
  constructor(private render:Renderer2,private eleRef:ElementRef){}
  // @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    console.log(this.eleRef.nativeElement.getAttribute('class'))
    if(this.eleRef.nativeElement.getAttribute('class'))
      this.render.removeAttribute(this.eleRef.nativeElement,'class');
    else
      this.render.addClass(this.eleRef.nativeElement,'open');
  }
}