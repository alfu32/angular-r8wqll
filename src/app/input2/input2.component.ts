import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss']
})
export class Input2Component implements OnInit {
  @ViewChild('outputview') outputview: ElementRef;
  @ViewChild('inputview') inputview: ElementRef;
  instring
  outstring
  inStrpos
  outStrpos
  constructor() { }
  fn(str,p){
    return str;
  }
  pos(str,p){
    return p;
  }
  _common(event){
    this.instring=event.target.innerHTML;
    this.inStrpos=event.target.selectionStart;
    this.outstring=this.fn(this.instring,this.inStrpos);
    this.outStrpos=this.pos(this.outstring,this.inStrpos);
  }
  inputKeyUp(event){
    this._common(event)
  }
  inputClick(event){
    this._common(event)
  }
  inputSelectionStart(event){
    this._common(event)
  }
  ngOnInit() {
  }

}