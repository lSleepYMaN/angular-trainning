import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  title = 'IMG';
  imageCoverUrl1 = '/images/example1.png'
  imageCoverUrl2 = '/images/example2.png'

  items = ['Banana', 'Coconut', 'Tomato', 'Watermelon', 'Mango']

  now = new Date()

  products = 
  [
    {
      id: 1,
      name: 'T-shirt',
      size: 'M',
      price : 390,
      releaseDate : new Date()
    },
    {
      id: 2,
      name: 'Shirt',
      size: 's',
      price : 290,
      releaseDate : new Date()
    },
    {
      id: 3,
      name: 'POLO',
      size: 'L',
      price : 500,
      releaseDate : new Date()
    },
    {
      id: 4,
      name: 'Dress',
      size: 'M',
      price : 1080,
      releaseDate : new Date()
    },
    {
      id: 5,
      name: 'Jacket',
      size: 'XL',
      price : 890,
      releaseDate : new Date()
    },
    
  ]
}
