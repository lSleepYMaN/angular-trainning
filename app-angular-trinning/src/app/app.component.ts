import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Page1Component } from "./page1/page1.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-trinning';
  imageCoverUrl1 = '/images/example1.png'
  imageCoverUrl2 = '/images/example2.png'

}

