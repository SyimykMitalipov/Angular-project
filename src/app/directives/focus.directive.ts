import {AfterContentInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterContentInit  {


  constructor(private el: ElementRef) { }

  ngOnInit() {
  this.el.nativeElement.focus();
  }
  ngAfterContentInit(): void {
  }

}
