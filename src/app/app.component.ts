import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ACER';
  public showMenu = false;
  public showLightBox = !sessionStorage.LightBox;
  constructor(private _router: Router) {
    sessionStorage.LightBox = true

  }
  ngOnInit(): void {
    this._router.events.subscribe((evt) => {
      this.showMenu = false;
      let container = document.getElementById("container");
      container.scrollTop = 0;
      this._scrollToActive();
    });
  }

  private _scrollToActive() {
    setTimeout(() => {
      let active = document.querySelector(".header li.active") as HTMLElement;
      if (!active) return;
      let parent = active.parentElement;
      let scrollLeft = parent.lastChild == active ? active.offsetLeft : active.offsetLeft - active.offsetWidth;
      let isInView = active.offsetLeft + active.clientWidth > parent.scrollLeft && active.offsetLeft < parent.scrollLeft + parent.clientWidth;
      if (isInView) return;
      if (active) active.parentElement.scrollTo(scrollLeft, 0);
    }, 500);
  }
}
