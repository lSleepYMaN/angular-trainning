import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  title = 'IMG';
  imageCoverUrl1 = '/images/example1.png'
  imageCoverUrl2 = '/images/example2.png'
  imageCoverUrl3 = '/images/example3.png'

  now = new Date()
}
