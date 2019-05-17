import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  maskedInputFilter(val){
    return val.split('').reduce( (a,v) => {
      if(a.length%3 === 0) a+=",";
      a+=v;
      return a;
    }, "")
  }
}
