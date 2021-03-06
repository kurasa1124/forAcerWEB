import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = ["活動資訊",
    "活動優惠",
    "座位表",
    "購買/退票",
    "選擇",
    "選擇",
    "選擇",
    "選擇"]
  public active = 0;
  constructor() { }

  ngOnInit() {
  }

  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scroll({ top: 0, left: nav.scrollLeft - nav.clientWidth, behavior: 'smooth' });
    if (pos == 'right') nav.scroll({ top: 0, left: nav.scrollLeft + nav.clientWidth, behavior: 'smooth' });
  }

}
