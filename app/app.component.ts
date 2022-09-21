import { Component } from "@angular/core/src/metadata";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class = "app">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent{

}
