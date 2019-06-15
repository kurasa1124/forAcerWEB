import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'pay-no-seat',
  templateUrl: './no-seat.component.html',
  styleUrls: ['./no-seat.component.scss'],
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ maxHeight: "0" }),
        animate(".25s linear", style({ maxHeight: "100px" }))
      ]),
      transition(":leave", [
        style({ maxHeight: "100px" }),
        animate(".25s linear", style({ maxHeight: "0" }))
      ])
    ])
  ]
})
export class NoSeatComponent implements OnInit {
  public showDetail = true;
  constructor() { }

  ngOnInit() {
  }

}
