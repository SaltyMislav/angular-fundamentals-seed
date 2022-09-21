import { NgModule } from '@angular/core/src/metadata';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashBoardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    //custom modules
    PassengerDashBoardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
