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
  public viewValue="";
  public modelValue="";
  public viewCursorPosition=0;
  public modelCursorPosition=0;
  constructor() { }
  _json(){
    return {
      viewValue : this.viewValue,
      modelValue : this.modelValue,
      viewCursorPosition : this.viewCursorPosition,
      modelCursorPosition : this.modelCursorPosition,
    };
  }
  _positionCursor(event){
    const value=event.target.value;
    this.modelCursorPosition = event.target.selectionStart;
  }
  check(model,view,pos){
    console.log(this._json())
    return model.substr(0,pos) === view.substr(0,pos).replace(/,/gi,"")
  }
  getCursorModelPos(){
    const value=event.target.value;
    this.modelCursorPosition = event.target.selectionStart;
  }
  _internalPipeValue(event){
    const value=event.target.value;
    this.modelCursorPosition = event.target.selectionStart;

    const [ _newValue,_error ] = this.filter(event.target.value);
    this.viewValue = _newValue.map(v => `${v}`).join('');
    this.
    let j=0;
    this.viewCursorPosition=_newValue.reduce( (a,v,i) => {
      if(this.check(value,this.viewValue,this.modelCursorPosition))a++;
      return a;
    },0);

    this.outputview.nativeElement.value = this.viewValue;
    this.outputview.nativeElement.focus();
    this.outputview.nativeElement.setSelectionRange(this.viewCursorPosition, this.viewCursorPosition);
    this.value.emit(_newValue);
    if(_error)this.error.emit(_error);
    console.log(this._json())
    setTimeout( ()=>event.target.focus(),600);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

}