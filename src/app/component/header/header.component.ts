import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { LightBoxService } from '../../service/lightBox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent {
  @Input() menu: boolean;
  @Output() showMenu = new EventEmitter();
  public showUserList = false;
  public name = 'XXX';
  public language: string[] = ['中文', 'English'];
  public showLogin = false;
  public photoUrl = "http://pipsum.com/100x100.jpg"
  constructor(public token: TokenService, public lightBox: LightBoxService, private _router: Router) { }
  public goCart() {
    this._router.navigate(['shopping-cart', 'pay'])
  }

}
