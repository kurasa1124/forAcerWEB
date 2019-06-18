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
    });
  }
}
