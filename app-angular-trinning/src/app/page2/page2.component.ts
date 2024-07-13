import { Component } from '@angular/core';
import { Page1Component } from "../page1/page1.component";

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [Page1Component],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  title = 'IMG';
  imageCoverUrl1 = '/images/example1.png'
  imageCoverUrl2 = '/images/example2.png'
  size = 'S'

  now = new Date()
}
