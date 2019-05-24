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
  instring: string;
  outstring: string;
  inStrpos: number;
  outStrpos: number;
  constructor() { }
  tf(str: string): string{
    return str.match(/.{1,3}/g).join("_");
  }
  fn(str: string, p:number): string{
    let strIn: string=this.tf(str);
    let pOut: number=Number.parseInt(p*4/3 + "");
    return `<left style="box-sizing: border-box;border-right:1px solid #000">${strIn.substr(0,pOut)}</left><right>${strIn.substr(pOut)}</right>`;
    return strIn.split("").reverse().join("");
  }
  pos(strIn: string, pIn: number, strOut: string): number{
    return strIn.length-pIn;
  }
  _common(event: Event){
    //console.log(event);
    this.instring=event.target['value'];
    this.inStrpos=event.target['selectionStart'];
    this.outstring=this.fn(this.instring,this.inStrpos);
    this.outputview.nativeElement.innerHTML=this.outstring;
    const cursor = this.outputview.nativeElement.querySelectorAll("cursor");

    this.outStrpos=cursor[0].offsetLeft;//this.pos(this.instring,this.inStrpos,this.outstring);
    this.cursorView.nativeElement.style.left = `${cursor[0].offsetLeft}px`;
    this.cursorView.nativeElement.style.top = `${cursor[0].offsetTop}px`;
  }
  inputKeyUp(event: Event){
    this._common(event)
  }
  inputClick(event: Event){
    this._common(event)
  }
  inputSelectionStart(event: Event){
    this._common(event)
  }
  ngOnInit() {
  }

}