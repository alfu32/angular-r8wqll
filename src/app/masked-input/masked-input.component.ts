import { Component, OnInit, OnDestroy, Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-masked-input',
  templateUrl: './masked-input.component.html',
  styleUrls: ['./masked-input.component.scss']
})
export class MaskedInputComponent implements OnInit,OnDestroy {
  @Input('masked-input-filter') filter;
  @ViewChild('outView') _outView: ElementRef;
  @ViewChild('inElement') _inView: ElementRef;
  constructor() { }
  _internalPipeValue(event){
    this._outView.nativeElement.innerHTML = this.filter(this._inView.nativeElement.value);
  }

  ngOnInit() {
    console.log(this.filter);
    console.log(this._inView.nativeElement);
    console.log(this._outView.nativeElement);
    this._inView.nativeElement.addEventListener("change",this._internalPipeValue);
  }
  ngOnDestroy(){
    this._inView.nativeElement.removeEventListener("change",this._internalPipeValue);
  }

}