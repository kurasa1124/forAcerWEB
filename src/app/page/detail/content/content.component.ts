import { Component, OnInit } from '@angular/core';
import * as chinese from "chinesegen"
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public h3 = chinese({ count: 10, freq: true }).text;
  public h4 = chinese({ count: 20, freq: true }).text;
  public p = chinese({ count: 150, freq: true }).text
  constructor() { }

  ngOnInit() {
  }

}
