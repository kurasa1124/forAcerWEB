import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {
  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scroll({ top: 0, left: nav.scrollLeft - nav.clientWidth, behavior: 'smooth' });
    if (pos == 'right') nav.scroll({ top: 0, left: nav.scrollLeft + nav.clientWidth, behavior: 'smooth' });
  }
}
