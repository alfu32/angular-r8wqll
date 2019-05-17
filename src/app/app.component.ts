import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  maskedInputFilter(val){
    const ruleNumericalOnly=/\d|\./gi;
    const ruleSinglePoint=/\.{0,1}/;
    const checkNumerical=val.match(ruleNumericalOnly).join('');
    const checkSinglePoint=val.match(ruleSinglePoint)
    const [integral,decimal]=val.split('.');
    const new_integral=integral.split('').reverse().join('').match(/(\d|\.){1,3}/g).join(',').split('').reverse().join('')
    return new_integral+(decimal!==undefined?'.'+decimal:'');
  }
}
