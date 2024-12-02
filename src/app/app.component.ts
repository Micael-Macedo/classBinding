import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from './shared/star/star.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'classBinding';
}
