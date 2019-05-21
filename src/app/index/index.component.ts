import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public showMenu = false;
  public showLightBox = true;
  constructor() { }

  ngOnInit() {
  }

}
