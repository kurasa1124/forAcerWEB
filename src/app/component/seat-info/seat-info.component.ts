import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-seat-info',
  templateUrl: './seat-info.component.html',
  styleUrls: ['./seat-info.component.scss'],
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
export class SeatInfoComponent implements OnInit {
  public showDetail = false;
  constructor() { }

  ngOnInit() {
  }

}
