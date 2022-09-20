import { Component } from "@angular/core/src/metadata";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class = "app">
      <button (click)="handleClick(username.value)">
        Change name
      </button>
      <input
        text="text" #username>
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent{
  name: string = 'Todd';
  handleClick(value: string) {
    console.log(value);
  }
}
