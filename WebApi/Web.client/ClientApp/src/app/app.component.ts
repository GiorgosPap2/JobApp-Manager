import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from "./app.module";

@Component({
  selector: 'app-root',
  imports: [ AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book2wheel';
}
