import { Component, OnInit, OnDestroy,EventEmitter, Input,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-masked-input',
  templateUrl: './masked-input.component.html',
  styleUrls: ['./masked-input.component.scss']
})
export abstract class MaskedInputComponent implements OnInit,OnDestroy {
  @Output('onValue') value:EventEmitter<any> = new EventEmitter();
  @Output('onError') error:EventEmitter<any> = new EventEmitter();

  @ViewChild('outputview') outputview: ElementRef;
  @ViewChild('inputview') inputview: ElementRef;
  
  @Input('masked-input-filter') filter;
  
  public abstract initRuleSet(rules);
  public abstract filterFunction(val:string):string;

  constructor() { }
  _internalPipeValue(event){
    const value=event.target.value;
    const curLeft=value.substr(0,event.target.selectionStart);
    const curRight=value.substr(event.target.selectionStart);
    console.log(event,event.target.selectionStart,curLeft,curRight);

    const [ _newValue,_error ] = this.filter(event.target.value);
    const viewValue = _newValue.map(v => `<span class=${v==','?'comma':'number'}>${v}</span>`);
    console.log(viewValue);
    let j=0;
    const indexOfCursor=_newValue.reduce( (a,v,i) => {
      a[i]={posInput:j,posOutput:i,valueInput:v===','?null:v,valueOutput:v}
      if(v!==',')j++;
      return a;
    },{});
    console.log(viewValue,indexOfCursor);
    this.outputview.nativeElement.innerHTML = viewValue.join('');
    this.value.emit(_newValue);
    if(_error)this.error.emit(_error);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

}