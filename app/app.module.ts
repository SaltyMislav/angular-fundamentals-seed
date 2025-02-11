import { NgModule } from '@angular/core/src/metadata';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashBoardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  //redirect umjesto comeponent ako zelimo da nam na to ode
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    //RouterModule.forRoot(routes, { useHash: true }) koristenje u starijim browserima
    RouterModule.forRoot(routes),
    //custom modules
    PassengerDashBoardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
