import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scroll({ top: 0, left: nav.scrollLeft - nav.clientWidth, behavior: 'smooth' });
    if (pos == 'right') nav.scroll({ top: 0, left: nav.scrollLeft + nav.clientWidth, behavior: 'smooth' });
  }
}
