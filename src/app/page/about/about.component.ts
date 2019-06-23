import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scroll({ top: 0, left: nav.scrollLeft - nav.clientWidth, behavior: 'smooth' });
    if (pos == 'right') nav.scroll({ top: 0, left: nav.scrollLeft + nav.clientWidth, behavior: 'smooth' });
  }

}
