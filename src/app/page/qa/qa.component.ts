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
    if (pos == 'left') nav.scrollLeft -= screen.width / 2;
    if (pos == 'right') nav.scrollLeft += screen.width / 2;
  }
}
