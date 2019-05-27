import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
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
export class UserListComponent {
  @Output() logout = new EventEmitter();
}
