import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss'],
  host: { "[@slideIn]": "" },
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(".25s ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(".25s ease-in-out", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LightBoxComponent implements OnInit {
  @Output() showBox = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
