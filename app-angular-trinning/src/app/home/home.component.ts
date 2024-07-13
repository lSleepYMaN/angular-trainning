import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgdir = "/images/home.png"
  msg = "Is home"

  onImGClick(){
    alert("You don't click image")
  }
  now = new Date()
  number = 15523.765274166
}
