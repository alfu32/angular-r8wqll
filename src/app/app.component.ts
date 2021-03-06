import { Component } from '@angular/core';
import { ExecFileSyncOptionsWithStringEncoding } from 'child_process';

function numberWithCommas(x: string) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  maskedInputFilter(val:string){
    return [numberWithCommas(val).split(''),null];
    const ruleNumericalOnly=/\d|\./gi;
    const ruleSinglePoint=/\.{0,1}/;
    const checkNumerical=val.match(ruleNumericalOnly).join('');
    const checkSinglePoint=val.match(ruleSinglePoint)
    const [integral,decimal]=val.split('.');
    const new_integral=integral.split('').reverse().join('').match(/(\d|\.){1,3}/g).join(',').split('').reverse().join('')
    return new_integral+(decimal!==undefined?'.'+decimal:'');
  }
  maskedInputValue(event: UIEvent){
    console.log("maskedInputValue",event)
  }
  maskedInputError(event: UIEvent){
    console.log("maskedInputError",event)
  }
}
