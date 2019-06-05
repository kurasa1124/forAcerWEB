import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'pay-package',
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
export class PayPackageComponent implements OnInit {
  public showDetail = true;
  constructor() { }

  ngOnInit() {
  }

}
