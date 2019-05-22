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
  _common(event){
    this.inStrpos=event.target.selectionStart;
    this.instring=event.target.innerHTML;
  }
  inputKeyUp(event){

  }
  inputClick(event){

  }
  inputSelectionStart(event){
    
  }
  ngOnInit() {
  }

}