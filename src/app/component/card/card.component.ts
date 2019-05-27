import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string = "https://image.freepik.com/free-vector/mother-s-day-card-with-elegant-flowers_1361-1320.jpg"
  @Input() title: string = "標題";
  @Input() text: string = "副標";

  constructor() { }

  ngOnInit() {
  }

}
