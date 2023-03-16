import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bwn-cli';
  componentTitle = "I am App Component from component.ts";

  clickHandler() {
    alert("I AM CLICKED!!");
  }
}
