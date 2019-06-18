import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, stagger, animate, style, query } from '@angular/animations';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: { "[@slideIn]": "" },
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate(".5s ease-in-out", style({ transform: "translateX(0)" }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)" }),
        animate(".5s ease-in-out", style({ transform: "translateX(-100%)" }))
      ])
    ])
  ]
})
export class MenuComponent {
  public goods = false;
  public notice = false;
  public accounts = false;
  public qa = false;
  public optionals = ["全部分類", "音樂劇", "音樂", "舞蹈", "展覽", "演唱會", "戲劇", "體育", "親子", "講座", "電影", "國外", "其他"];

  @Output() toggle = new EventEmitter();

  constructor(public token: TokenService, private _router: Router) {
    let path = this._router.url.split('/');
    if (path.includes("account")) this.accounts = true;
    if (path.includes("goods")) this.goods = true;
    if (path.includes("review") || path.includes("search")) this.goods = false;
    if (path.includes("notice")) this.notice = true;
    if (path.includes("QA")) this.qa = true;
  }

  public toggleMenu(event: MouseEvent) {
    let el = event.target as HTMLElement;
    if (el.classList.contains("fold") || el.classList.contains("mi")) return;
    this.toggle.emit(false);
  }
}
