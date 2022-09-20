import { Component } from "@angular/core/src/metadata";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class = "app">
      {{ title }}
    </div>
  `
})
export class AppComponent{
  title: string;
  constructor () {
    this.title = 'Ultimate Angular';
  }
}
