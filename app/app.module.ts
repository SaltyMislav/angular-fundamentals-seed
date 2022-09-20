import { NgModule } from '@angular/core/src/metadata';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
