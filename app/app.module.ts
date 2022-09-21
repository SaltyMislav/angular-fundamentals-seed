import { NgModule } from '@angular/core/src/metadata';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PassengerDashBoardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    //custom modules
    PassengerDashBoardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
