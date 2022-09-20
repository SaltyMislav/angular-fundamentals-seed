import { Component } from "@angular/core/src/metadata";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class = "app">
      <h1>{{ title }}</h1>
      <img [src]="logo">
      <input text="text" [value]="name">
      <div>
        {{ name}}
      </div>
    </div>
  `
})
export class AppComponent{
  title: string;
  name: string = 'Todd';
  logo: string = 'img/pwa.svg';
  constructor () {
    this.title = 'Ultimate Angular';
  }
}
