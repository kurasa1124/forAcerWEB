import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {
  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scrollLeft -= nav.clientWidth;
    if (pos == 'right') nav.scrollLeft += nav.clientWidth;
  }
}