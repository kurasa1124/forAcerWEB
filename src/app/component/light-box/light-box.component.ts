import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {
  @Output() showBox = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
