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
    if (pos == 'left') nav.scrollLeft -= nav.clientWidth;
    if (pos == 'right') nav.scrollLeft += nav.clientWidth;
  }

}