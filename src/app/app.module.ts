import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerAllModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
