import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, stagger, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: { "[@slideIn]": "" },
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate(".25s ease-in-out", style({ transform: "translateX(0)" }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)" }),
        animate(".25s ease-in-out", style({ transform: "translateX(-100%)" }))
      ])
    ])
  ]
})
export class MenuComponent {
  public menu1 = false;
  public menu2 = false;
  public menu3 = false;

  @Output() toggle = new EventEmitter();

  public toggleMenu(event: MouseEvent) {
    let el = event.target as HTMLElement;
    if (el.classList.contains("fold")) return;
    this.toggle.emit(false);
  }
}
