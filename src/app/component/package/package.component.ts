import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'package-ticket',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
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
export class PackageComponent implements OnInit {
  public showDetail = false;
  constructor() { }

  ngOnInit() {
  }

}
