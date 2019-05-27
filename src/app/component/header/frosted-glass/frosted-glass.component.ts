import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-frosted-glass',
  templateUrl: './frosted-glass.component.html',
  styleUrls: ['./frosted-glass.component.scss'],
  host: { "[@slideIn]": "" },
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(".5s ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(".5s ease-in-out", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FrostedGlassComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() login = new EventEmitter();
  public forgetPassword = false;
  constructor() {

  }

  ngOnInit() {
    this.blur()
  }

  ngOnDestroy(): void {
    this.unBlur()
  }

  public blur() {
    let header = document.querySelector("#header") as HTMLElement;
    header.style.filter = "blur(50px)";
    let container = document.querySelector("#container") as HTMLElement;
    container.style.filter = "blur(50px)";
  }

  public unBlur() {
    let header = document.querySelector("#header") as HTMLElement;
    header.style.removeProperty("filter")
    let container = document.querySelector("#container") as HTMLElement;
    container.style.removeProperty("filter");
  }

}
