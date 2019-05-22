import { Component, OnInit, Input ,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss']
})
export class Input2Component implements OnInit {
  @Input("mask") mask:string;
  @ViewChild('outputview') outputview: ElementRef;
  @ViewChild('inputview') inputview: ElementRef;
  @ViewChild('cursorview') cursorView: ElementRef;
  instring
  outstring
  inStrpos
  outStrpos
  constructor() { }
  tf(str){
    return str.match(/.{1,3}/g).join("_");
  }
  fn(str,p){
    let strIn=this.tf(str);
    let pOut=Number.parseInt(p*4/3 + "");
    return `${strIn.substr(0,pOut)}<cursor></cursor>${strIn.substr(pOut)}`;
    return strIn.split("").reverse().join("");
  }
  pos(strIn,pIn,strOut){
    return strIn.length-pIn;
  }
  _common(event){
    //console.log(event);
    this.instring=event.target.value;
    this.inStrpos=event.target.selectionStart;
    this.outstring=this.fn(this.instring,this.inStrpos);
    this.outputview.nativeElement.innerHTML=this.outstring;
    const cursor = this.outputview.nativeElement.querySelectorAll("cursor");

    this.outStrpos=cursor[0].offsetLeft;//this.pos(this.instring,this.inStrpos,this.outstring);
    this.cursorView.nativeElement.style.left = `${cursor[0].offsetLeft}px`;
    this.cursorView.nativeElement.style.top = `${cursor[0].offsetTop}px`;
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