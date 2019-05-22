import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaskedInputComponent } from './masked-input/masked-input.component';
import { Input2Component } from './input2/input2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MaskedInputComponent, Input2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
