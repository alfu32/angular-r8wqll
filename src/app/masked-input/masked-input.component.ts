import { Component, OnInit, OnDestroy,EventEmitter, Input,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-masked-input',
  templateUrl: './masked-input.component.html',
  styleUrls: ['./masked-input.component.scss']
})
export abstract class MaskedInputComponent implements OnInit,OnDestroy {
  @Output() value:EventEmitter<any> = new EventEmitter();
  @Output() error:EventEmitter<any> = new EventEmitter();

  @ViewChild('outputview') outputview: ElementRef;
  @ViewChild('inputview') inputview: ElementRef;
  
  @Input('masked-input-filter') filter;
  
  public abstract initRuleSet(rules);
  public abstract filterFunction(val:string):string;

  constructor() { }
  _internalPipeValue(event){
    console.log(event);
    const [ _newValue,_error ] = this.filter(this.inputview.nativeElement.value);
    console.log(_newValue)
    this.outputview.nativeElement.innerHTML = _newValue;
    this.value.emit(_newValue);
    if(_error)this.error.emit(_error);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

}