import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() word: string = "標題";
  @Input() showMore: boolean = true;
  @Output() more = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
