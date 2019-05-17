import { Component, OnInit, OnDestroy, Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-masked-input',
  templateUrl: './masked-input.component.html',
  styleUrls: ['./masked-input.component.scss']
})
export class MaskedInputComponent implements OnInit,OnDestroy {
  @Input('masked-input-filter') filter;
  @ViewChild('outputview') outputview: ElementRef;
  @ViewChild('inputview') inputview: ElementRef;
  constructor() { }
  _internalPipeValue(event){
    const _newValue = this.filter(this.inputview.nativeElement.value);
    console.log(_newValue)
    this.outputview.nativeElement.innerHTML = _newValue;
  }

  ngOnInit() {
    console.log(this.filter);
    console.log(this.inputview.nativeElement);
    console.log(this.inputview.nativeElement);
    this.inputview.nativeElement.addEventListener("change",this._internalPipeValue);
  }
  ngOnDestroy(){
    this.inputview.nativeElement.removeEventListener("change",this._internalPipeValue);
  }

}